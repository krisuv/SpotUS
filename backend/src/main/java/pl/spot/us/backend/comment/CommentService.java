package pl.spot.us.backend.comment;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import pl.spot.us.backend.post.Post;
import pl.spot.us.backend.post.PostRepository;

import java.util.ArrayList;
import java.util.List;

import static pl.spot.us.backend.post.PostService.badWordsFound;
import static pl.spot.us.backend.post.PostService.loadConfigs;

@Service
public class CommentService {

    private final CommentRepository commentRepository;

    public CommentService(CommentRepository commentRepository) {
        this.commentRepository = commentRepository;
    }

    public List<Comment> findAll() {
        List<Comment> comments = commentRepository.findAll();
        return comments;
    }

    public Comment createComment(Comment comment){
        loadConfigs();
        Comment savedComment = comment;
        String postContent = savedComment.getContent();
        ArrayList<String> badWords = badWordsFound(postContent);
        if (badWords.size() > 0) {
            return null;
            //co się stanie jak ktoś wpisze złe
        }else {
            commentRepository.save(comment);
            return savedComment;
        }

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
