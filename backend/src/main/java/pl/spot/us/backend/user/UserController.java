package pl.spot.us.backend.user;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/user")
public class UserController {

    private final UserRepository userRepository;

    private final UserService userService;

    public UserController(UserRepository userRepository, UserService userService) {
        this.userRepository = userRepository;
        this.userService = userService;
    }

    @GetMapping("/{id}")
    public User getUser(@PathVariable Long id) {
        return userService.findById(id);
    }

    @PutMapping("/{id}")
    public ResponseEntity updateUser(@PathVariable Long id, User user) {
        return userService.updateUser(id, user);
    }
}
