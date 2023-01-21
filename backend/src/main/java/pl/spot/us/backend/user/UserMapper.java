package pl.spot.us.backend.user;

import org.springframework.stereotype.Component;
import pl.spot.us.backend.post.Post;
import pl.spot.us.backend.post.PostDTO;

@Component
public class UserMapper {

    public UserDTO toDTO(User user) {
        return UserDTO.builder()
                .firstName(user.getFirstName())
                .lastName(user.getLastName())
                .email(user.getEmail())
                .password(user.getPassword())
                .username(user.getUsername())
                .build();
    }
}
