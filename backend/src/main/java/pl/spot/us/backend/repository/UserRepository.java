package pl.spot.us.backend.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import pl.spot.us.backend.entity.User;

public interface UserRepository extends CrudRepository<User, Long> {
    User findByUsername(String login);

}
