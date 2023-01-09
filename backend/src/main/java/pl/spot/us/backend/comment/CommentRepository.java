package pl.spot.us.backend.comment;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.spot.us.backend.comment.Comment;

public interface CommentRepository extends JpaRepository<Comment, Long> {
}
