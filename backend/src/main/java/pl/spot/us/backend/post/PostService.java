package pl.spot.us.backend.post;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import pl.spot.us.backend.user.User;
import pl.spot.us.backend.user.UserRepository;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class PostService {

    private final PostRepository postRepository;

    public PostService(PostRepository postRepository) {
        this.postRepository = postRepository;
    }

    public List<PostDTO> findAll() {
        List<Post> posts = postRepository.findAll();
        return posts.stream()
                .map(post -> PostDTO.builder()
                        .id(post.getId())
                        .username(post.getUser().getUsername())
                        .tag(post.getTag())
                        .content(post.getContent())
                        .publishDate(post.getPublishDate())
                        .votes(post.getVotes())
                        .commentsCount(post.getComments().size())
                        .build())
                .collect(Collectors.toList());
    }


    public Post createPost(PostDTO post){
        Post savedPost = Post.builder()
                .tag(post.getTag())
                .content(post.getContent())
                .publishDate(post.getPublishDate())
                .votes(post.getVotes())
                .user((User)SecurityContextHolder.getContext().getAuthentication().getPrincipal())
                .build();
        System.out.println(savedPost);
        postRepository.save(savedPost);
        return savedPost;

    }

    public PostDTO findById(Long id) {
        Post post = postRepository.findById(id).orElseThrow(RuntimeException::new);
        return PostDTO.builder()
                .id(post.getId())
                .username(post.getUser().getUsername())
                .tag(post.getTag())
                .content(post.getContent())
                .publishDate(post.getPublishDate())
                .votes(post.getVotes())
                .commentsCount(post.getComments().size())
                .build();
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
