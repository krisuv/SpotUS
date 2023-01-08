package pl.spot.us.backend.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.spot.us.backend.entity.Post;
import pl.spot.us.backend.repository.PostRepository;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

@RestController
@RequestMapping("/posts")
public class PostController {
    private final PostRepository postRepository;

    public PostController(PostRepository postRepository) {
        this.postRepository = postRepository;
    }

    @GetMapping
    public List<Post> getPosts() {
        return postRepository.findAll();
    }
    @PostMapping("")
    public ResponseEntity createPost(@RequestBody Post post) throws URISyntaxException {
        Post savedPost = postRepository.save(post);
        return ResponseEntity.created(new URI("/posts" + savedPost.getId())).body(savedPost);
    }
    @GetMapping("/{id}")
    public Post getPost(@PathVariable Long id) {
        return postRepository.findById(id).orElseThrow(RuntimeException::new);
    }
    @PutMapping("/{id}")
    public ResponseEntity updatePost(@PathVariable Long id, @RequestBody Post post) {
        Post currentPost = postRepository.findById(id).orElseThrow(RuntimeException::new);
        currentPost.setTag(post.getTag());
        currentPost.setTitle(post.getTitle());
        currentPost.setContent(post.getContent());
        currentPost = postRepository.save(post);

        return ResponseEntity.ok(currentPost);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity deletePost(@PathVariable Long id) {
        postRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
