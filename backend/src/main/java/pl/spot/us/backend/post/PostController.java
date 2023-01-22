package pl.spot.us.backend.post;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.spot.us.backend.swearWordsValidation.SwearWordsFoundException;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

@RestController
@RequestMapping("/api/posts")
public class PostController {
    private final PostService postService;

    public PostController(PostService postService) {
        this.postService = postService;
    }

    @GetMapping("")
    public List<PostDTO> getPosts() {
        return postService.findAll();
    }

    @PostMapping("")
    public ResponseEntity createPost(@RequestBody PostDTO post) {
        try {
            return ResponseEntity.ok(postService.createPost(post));
        }
        catch (SwearWordsFoundException exception){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("W tekście znaleziono słowa niezgodne z regulaminem");
        }
    }

    @GetMapping("/{id}")
    public PostDTO getPost(@PathVariable Long id) {
        return postService.findById(id);
    }

    @PutMapping("/{id}")
    public ResponseEntity updatePost(@PathVariable Long id, @RequestBody PostDTO post) {
        return postService.updatePost(id, post);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity deletePost(@PathVariable Long id) {
        return postService.deletePost(id);
    }
}
