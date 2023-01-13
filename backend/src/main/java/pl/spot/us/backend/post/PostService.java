package pl.spot.us.backend.post;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

@Service
public class PostService {

    private final PostRepository postRepository;

    public PostService(PostRepository postRepository) {
        this.postRepository = postRepository;
    }

    public List<Post> findAll() {
        List<Post> posts = postRepository.findAll();
        return posts;
    }

    public Post createPost(Post post){
        Post savedPost = post;

        // TODO weryfikacja lista przekleństw
        //możesz coś w tym stylu
        //String postContent = savedPost.getContent();
        //if(postContent coś tam ) {}

        postRepository.save(post);
        return savedPost;
    }

    public Post findById(Long id) {
        return postRepository.findById(id).orElseThrow(RuntimeException::new);
    }

    public ResponseEntity updatePost(Long id, Post post) {
        Post currentPost = postRepository.findById(id).orElseThrow(RuntimeException::new);
        currentPost.setTag(post.getTag());
        currentPost.setContent(post.getContent());
        currentPost = postRepository.save(post);

        return ResponseEntity.ok(currentPost);
    }

    public ResponseEntity deletePost(@PathVariable Long id) {
        postRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
