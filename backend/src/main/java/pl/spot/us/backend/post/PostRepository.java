package pl.spot.us.backend.post;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pl.spot.us.backend.post.Post;

@Repository
public interface PostRepository extends JpaRepository<Post, Long> {
}
