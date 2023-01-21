package pl.spot.us.backend.post;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class PostService {

    private final PostRepository postRepository;

    private final PostMapper postMapper;

    public List<PostDTO> findAll() {
        List<Post> posts = postRepository.findAll();
        return posts.stream()
                .map(postMapper::toDTO)
                .collect(Collectors.toList());
    }

    public PostDTO createPost(PostDTO post){
        Post savedPost = postRepository.save(postMapper.toEntity(post));
        return postMapper.toDTO(savedPost);
    }

    public PostDTO findById(Long id) {
        Post post = postRepository.findById(id).orElseThrow(RuntimeException::new);
        return postMapper.toDTO(post);
    }

    @Transactional
    public ResponseEntity<PostDTO> updatePost(Long id, PostDTO postDTO) {
        Post currentPost = postRepository.findById(id).orElseThrow(RuntimeException::new);
        currentPost.setTag(postDTO.getTag());
        currentPost.setContent(postDTO.getContent());
        return ResponseEntity.ok(postMapper.toDTO(currentPost));
    }

    public ResponseEntity<Void> deletePost(@PathVariable Long id) {
        postRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
