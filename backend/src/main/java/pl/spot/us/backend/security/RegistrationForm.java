package pl.spot.us.backend.security;
import lombok.Data;
import org.springframework.security.crypto.password.PasswordEncoder;
import pl.spot.us.backend.entity.User;

@Data
public class RegistrationForm {

    private String login;
    private String password;
    private String username;


    public User toUser(PasswordEncoder passwordEncoder) {
        return new User(
                login, passwordEncoder.encode(password),
                username);
    }

}