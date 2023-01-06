package pl.spot.us.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import pl.spot.us.backend.entity.Comment;
import pl.spot.us.backend.repository.CommentRepository;

import java.util.List;

@Controller
@RequestMapping("/Comments/")
public class CommentController {
    @Autowired
    CommentRepository commentRepository;
    @PostMapping("")
    public int add(@RequestBody Comment post){
        return commentRepository.save(post);
    }
    @GetMapping("")
    public List<Comment> getAll(){
        return commentRepository.getAll();
    }
    @GetMapping("{id}")
    public Comment getById(@PathVariable("id") Long id){
        return commentRepository.getById(id);
    }
    @DeleteMapping("{id}")
    public int delete(@PathVariable("id") Long id) { return commentRepository.delete(id); }
}
