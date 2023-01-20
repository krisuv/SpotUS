package pl.spot.us.backend.user;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import pl.spot.us.backend.post.Post;
import pl.spot.us.backend.post.PostRepository;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User findById(Long id) {
        return userRepository.findById(id).orElseThrow(RuntimeException::new);
    }

    public ResponseEntity updateUser(Long id, User user) {
        User currentUser = userRepository.findById(id).orElseThrow(RuntimeException::new);
        currentUser.setFirstName(user.getFirstName());
        currentUser.setLastName(user.getLastName());

        userRepository.save(currentUser);

        return ResponseEntity.ok(currentUser);
    }
}
