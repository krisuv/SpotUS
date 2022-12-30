package pl.spot.us.backend.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import pl.spot.us.backend.entity.Post;

@Repository
public interface PostRepository extends CrudRepository<Post, Long> {

}
