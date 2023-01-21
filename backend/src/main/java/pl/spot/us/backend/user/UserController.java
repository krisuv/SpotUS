package pl.spot.us.backend.user;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/user")
public class UserController {

    private final UserRepository userRepository;

    private final UserMapper userMapper;

    private final UserService userService;


    @GetMapping
    public UserDTO getUser() {
        User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        return userMapper.toDTO(user);
    }

    @PutMapping("/{id}")
    public ResponseEntity updateUser(@PathVariable Long id, User user) {
        return userService.updateUser(id, user);
    }
}
