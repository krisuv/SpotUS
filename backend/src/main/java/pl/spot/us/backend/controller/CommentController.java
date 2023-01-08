package pl.spot.us.backend.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.spot.us.backend.entity.Comment;
import pl.spot.us.backend.repository.CommentRepository;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

@RestController
@RequestMapping("/comments")
public class CommentController {
    private final CommentRepository commentRepository;

    public CommentController(CommentRepository commentRepository) {
        this.commentRepository = commentRepository;
    }

    @GetMapping
    public List<Comment> getComments() {
        return commentRepository.findAll();
    }
    @PostMapping("")
    public ResponseEntity createComment(@RequestBody Comment comment) throws URISyntaxException {
        Comment savedComment = commentRepository.save(comment);
        return ResponseEntity.created(new URI("/comments" + savedComment.getId())).body(savedComment);
    }
    @GetMapping("/{id}")
    public Comment getComment(@PathVariable Long id) {
        return commentRepository.findById(id).orElseThrow(RuntimeException::new);
    }
    @PutMapping("/{id}")
    public ResponseEntity updateComment(@PathVariable Long id, @RequestBody Comment comment) {
        Comment currentComment = commentRepository.findById(id).orElseThrow(RuntimeException::new);
        currentComment.setContent(comment.getContent());
        currentComment = commentRepository.save(comment);

        return ResponseEntity.ok(currentComment);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity deleteComment(@PathVariable Long id) {
        commentRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
