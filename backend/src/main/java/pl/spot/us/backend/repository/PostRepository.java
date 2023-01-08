package pl.spot.us.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.spot.us.backend.entity.Post;

public interface PostRepository extends JpaRepository<Post, Long> {
}
