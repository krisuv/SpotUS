package pl.spot.us.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pl.spot.us.backend.entity.Post;
import pl.spot.us.backend.repository.PostRepository;
@RequestMapping("/posts")
@RestController
public class PostController {
    @Autowired
    PostRepository postRepository;
    @PostMapping("/")
    public int add (@RequestBody Post post){
        return postRepository.save(post);
    }
    @GetMapping("/hello")
    public String helloworld(){
        return "witaj świecie";
    }
}
