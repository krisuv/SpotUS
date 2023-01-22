package pl.spot.us.backend.comment;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import pl.spot.us.backend.swearWordsValidation.SwearWordsFoundException;
import pl.spot.us.backend.swearWordsValidation.SwearWordsValidation;

import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CommentService {

    private final CommentRepository commentRepository;

    private final CommentMapper commentMapper;

    private final SwearWordsValidation swearWordsValidation;

    public List<CommentDTO> findAll() {
        List<Comment> comments = commentRepository.findAll();
        return comments.stream()
                .map(commentMapper::toDTO)
                .collect(Collectors.toList());
    }

    public List<CommentDTO> findAllByPostId(Long postId) {
        List<Comment> comments = commentRepository.findAll();
        List<Comment> commentsByPostId = comments
                .stream()
                .filter(comment -> Objects.equals(comment.getPost().getId(), postId)).toList();

        return commentsByPostId.stream()
                .map(commentMapper::toDTO)
                .collect(Collectors.toList());
    }

    public CommentDTO createComment(CommentDTO commentDTO, Long postId) throws SwearWordsFoundException {
        Comment savedComment = commentMapper.toEntity(commentDTO, postId);
        if (swearWordsValidation.isContentValid(savedComment.getContent())) {
            commentRepository.save(savedComment);
            return commentMapper.toDTO(savedComment);
        }else{
            throw new SwearWordsFoundException("W tekście znaleziono słowa niezgodne z regulaminem");
        }
    }

    public CommentDTO findById(Long id) {
        Comment comment = commentRepository.findById(id).orElseThrow(RuntimeException::new);
        return commentMapper.toDTO(comment);
    }

    @Transactional
    public ResponseEntity<CommentDTO> updateComment(Long id, CommentDTO commentDTO) {
        Comment currentComment = commentRepository.findById(id).orElseThrow(RuntimeException::new);
        currentComment.setContent(commentDTO.getContent());
        return ResponseEntity.ok(commentMapper.toDTO(currentComment));
    }

    public ResponseEntity deleteById(Long id){
        commentRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
