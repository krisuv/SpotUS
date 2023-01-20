package pl.spot.us.backend.comment;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import pl.spot.us.backend.post.Post;
import pl.spot.us.backend.post.PostRepository;
import pl.spot.us.backend.user.User;

import java.util.List;

@Service
public class CommentService {

    private final CommentRepository commentRepository;
    private final PostRepository postRepository;

    public CommentService(CommentRepository commentRepository, PostRepository postRepository) {
        this.commentRepository = commentRepository;
        this.postRepository = postRepository;
    }

    public List<Comment> findAll() {
        List<Comment> comments = commentRepository.findAll();
        return comments;
    }

    public Comment createComment(Comment comment){
        Comment savedComment = comment;

        Post post = new Post(postRepository.findById(2L));
        savedComment.setPost(post);
        if(post != null) {
            postRepository.save(post);
            return comment;
        }
        return null;
    }

    public Comment findById(Long id) {
        return commentRepository.findById(id).orElseThrow(RuntimeException::new);
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
