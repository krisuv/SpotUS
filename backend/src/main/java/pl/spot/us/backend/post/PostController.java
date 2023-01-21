package pl.spot.us.backend.post;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.spot.us.backend.post.Post;
import pl.spot.us.backend.post.PostRepository;

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

    @PostMapping(value ="", consumes = {"application/json"})
    public ResponseEntity createPost(@RequestBody PostDTO post) throws URISyntaxException {
        Post savedPost = postService.createPost(post);
        return ResponseEntity.created(new URI("/posts" + savedPost.getId())).body(savedPost);
    }
    @GetMapping("/{id}")
    public PostDTO getPost(@PathVariable Long id) {
        return postService.findById(id);
    }
    @PutMapping("/{id}")
    public ResponseEntity updatePost(@PathVariable Long id, @RequestBody Post post) {
        return postService.updatePost(id, post);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity deletePost(@PathVariable Long id) {
        return postService.deletePost(id);
    }
}
