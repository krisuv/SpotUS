package pl.spot.us.backend.comment;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.spot.us.backend.swearWordsValidation.SwearWordsFoundException;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

@RestController
@RequestMapping("/api/comments")
public class CommentController {
    private final CommentService commentService;

    public CommentController(CommentService commentService) {
        this.commentService = commentService;
    }

    @GetMapping(value = "")
    public List<CommentDTO> getComments() {
        return commentService.findAll();
    }

    @GetMapping(value = "/byPostId/{postId}")
    public List<CommentDTO> getCommentsByPostId(@PathVariable Long postId) {
        return commentService.findAllByPostId(postId);
    }

    @PostMapping("/{postId}")
    public ResponseEntity createComment(@RequestBody CommentDTO commentDTO, @PathVariable Long postId) throws URISyntaxException, SwearWordsFoundException {
        try {
            return ResponseEntity.ok(commentService.createComment(commentDTO, postId));
        }
        catch (SwearWordsFoundException exception){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("W tekście znaleziono słowa niezgodne z regulaminem");
        }

    }

    @GetMapping("/{id}")
    public CommentDTO getComment(@PathVariable Long id) {
        return commentService.findById(id);
    }

    @PutMapping("/{id}")
    public ResponseEntity updateComment(@PathVariable Long id, @RequestBody CommentDTO commentDTO) {
        return commentService.updateComment(id, commentDTO);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteComment(@PathVariable Long id) {
        return  commentService.deleteById(id);
    }
}
