package pl.spot.us.backend.auth;

import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import pl.spot.us.backend.config.JwtService;
import pl.spot.us.backend.user.RoleEnum;
import pl.spot.us.backend.user.User;
import pl.spot.us.backend.user.UserRepository;

import java.util.regex.Pattern;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final UserRepository userRepository;

    private final PasswordEncoder passwordEncoder;

    private final JwtService jwtService;

    private final AuthenticationManager authenticationManager;

    public AuthenticationResponse register(RegisterRequest request) throws UserAlreadyExistsException, EmailPatternNotAllowedException, UsernameAlreadyTakenException {
        var user = User.builder()
                .firstName(request.getFirstName())
                .lastName(request.getLastName())
                .username(request.getUsername())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(RoleEnum.USER)
                .build();
        if(!isEmailTaken(request.getEmail())) {
            throw new UserAlreadyExistsException("Podany email jest już zajęty");
        }
        if(!isEmailValid(request.getEmail())){
            throw new EmailPatternNotAllowedException("Podany email musi zawierać: usz.edu albo stud.usz.edu");
        }
        if(!isUsernameTaken(request.getUsername())) {
            throw new UsernameAlreadyTakenException("Podany nick jest już zajęty");
        }
        userRepository.save(user);
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse
                .builder()
                .token(jwtToken)
                .build();
    }

    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getUsername(),
                        request.getPassword()
                )
        );
        var user = userRepository.findByUsername(request.getUsername())
                .orElseThrow();
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse
                .builder()
                .token(jwtToken)
                .build();
    }

    public Boolean isEmailTaken(String email) {
        return userRepository.findByEmail(email).isEmpty();
    }
    public Boolean isUsernameTaken(String username) {
        return userRepository.findByUsername(username).isEmpty();
    }
    public Boolean isEmailValid(String email) {
        String regexPattern = "^(?=.{1,64}@)[A-Za-z0-9._-]+(\\.[A-Za-z0-9_-]+)*@+(stud\\.usz|usz)\\.edu\\.pl$";
        return Pattern.compile(regexPattern)
                .matcher(email)
                .matches();
    }

}
