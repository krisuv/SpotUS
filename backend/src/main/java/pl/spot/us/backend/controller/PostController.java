package pl.spot.us.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pl.spot.us.backend.entity.Post;
import pl.spot.us.backend.repository.PostRepository;

import java.util.List;

@RequestMapping("/posts/")
@RestController
public class PostController {
    @Autowired
    PostRepository postRepository;
    @PostMapping("")
    public int add(@RequestBody Post post){
        return postRepository.save(post);
    }
    @GetMapping("")
    public List<Post> getAll(){
        return postRepository.getAll();
    }
    @GetMapping("{id}")
    public Post getById(@PathVariable("id") Long id){
        return postRepository.getById(id);
    }
    @DeleteMapping("{id}")
    public int delete(@PathVariable("id") Long id) { return postRepository.delete(id); }
    @GetMapping("hello")
    public String helloworld(){
        return "witaj świecie";
    }
}
