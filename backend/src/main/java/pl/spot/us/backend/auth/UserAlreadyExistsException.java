package pl.spot.us.backend.auth;

import org.springframework.security.core.AuthenticationException;

public class UserAlreadyExistsException extends Exception {
    public UserAlreadyExistsException(String msg) {
        super(msg);
    }
}
