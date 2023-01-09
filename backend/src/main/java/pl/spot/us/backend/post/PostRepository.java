package pl.spot.us.backend.post;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.spot.us.backend.post.Post;

public interface PostRepository extends JpaRepository<Post, Long> {
}
