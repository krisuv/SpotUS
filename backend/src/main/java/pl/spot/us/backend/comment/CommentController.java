package pl.spot.us.backend.comment;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

@RestController
@RequestMapping("/comments/")
public class CommentController {
    private final CommentService commentService;

    public CommentController(CommentService commentService) {
        this.commentService = commentService;
    }

    @GetMapping
    public List<Comment> getComments() {
        return commentService.findAll();
    }
    @PostMapping("")
    public ResponseEntity createComment(@RequestBody Comment comment) throws URISyntaxException {
        Comment savedComment = commentService.createComment(comment);
        return ResponseEntity.created(new URI("/comments/" + savedComment.getId())).body(savedComment);
    }
    @GetMapping("{id}/")
    public Comment getComment(@PathVariable Long id) {
        return commentService.findById(id);
    }
    @PutMapping("{id}/")
    public ResponseEntity updateComment(@PathVariable Long id, @RequestBody Comment comment) {
        return commentService.updateComment(id, comment);
    }
    @DeleteMapping("{id}/")
    public ResponseEntity deleteComment(@PathVariable Long id) {
        return  commentService.deleteById(id);
    }
}
