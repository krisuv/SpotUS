package pl.spot.us.backend.comment;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import pl.spot.us.backend.post.Post;
import pl.spot.us.backend.post.PostDTO;
import pl.spot.us.backend.post.PostRepository;
import pl.spot.us.backend.user.User;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CommentService {

    private final CommentRepository commentRepository;
    private final PostRepository postRepository;

    public CommentService(CommentRepository commentRepository, PostRepository postRepository) {
        this.commentRepository = commentRepository;
        this.postRepository = postRepository;
    }

    public List<CommentDTO> findAll() {
        List<Comment> comments = commentRepository.findAll();
        return comments.stream()
                .map(comment -> CommentDTO.builder()
                        .id(comment.getId())
                        .username(comment.getUser().getUsername())
                        .content(comment.getContent())
                        .build())
                .collect(Collectors.toList());
    }

    public List<CommentDTO> findAllByPostId(Long postId) {
        List<Comment> comments = commentRepository.findAll();
        List<Comment> commentsByPostId = comments
                .stream()
                .filter(comment -> comment.getPost().getId() == postId)
                .collect(Collectors.toList());
        return commentsByPostId.stream()
                .map(comment -> CommentDTO.builder()
                        .id(comment.getId())
                        .username(comment.getUser().getUsername())
                        .content(comment.getContent())
                        .build())
                .collect(Collectors.toList());
    }

    public Comment createComment(Comment comment){
        Comment savedComment = comment;
        commentRepository.save(savedComment);
        return comment;
    }

    public CommentDTO findById(Long id) {
        Comment comment = commentRepository.findById(id).orElseThrow(RuntimeException::new);
        return CommentDTO.builder()
                .id(comment.getId())
                .username(comment.getUser().getUsername())
                .content(comment.getContent())
                .build();
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
