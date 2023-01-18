package pl.spot.us.backend.comment;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pl.spot.us.backend.comment.Comment;

@Repository
public interface CommentRepository extends JpaRepository<Comment, Long> {
}
