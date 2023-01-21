package pl.spot.us.backend.comment;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import pl.spot.us.backend.post.Post;
import pl.spot.us.backend.post.PostDTO;
import pl.spot.us.backend.post.PostRepository;
import pl.spot.us.backend.user.User;

import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CommentService {

    private final CommentRepository commentRepository;

    private final CommentMapper commentMapper;


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

    public CommentDTO createComment(CommentDTO commentDTO, Long postId){
        Comment savedComment = commentRepository.save(commentMapper.toEntity(commentDTO, postId));
        return commentMapper.toDTO(savedComment);
    }

    public CommentDTO findById(Long id) {
        Comment comment = commentRepository.findById(id).orElseThrow(RuntimeException::new);
        return commentMapper.toDTO(comment);
    }

    public ResponseEntity updateComment(Long id, Comment comment) {
        Comment currentComment = commentRepository.findById(id).orElseThrow(RuntimeException::new);
        currentComment.setContent(comment.getContent());
        currentComment = commentRepository.save(comment);

        return ResponseEntity.ok(currentComment);
    }

    public ResponseEntity deleteById(Long id){
        commentRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
