package pl.spot.us.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.spot.us.backend.entity.Comment;

public interface CommentRepository extends JpaRepository<Comment, Long> {
}
