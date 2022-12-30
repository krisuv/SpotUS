package pl.spot.us.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import pl.spot.us.backend.repository.PostRepository;

public class PostService {

    @Autowired
    private PostRepository postRepository;


}
