package pl.spot.us.backend.auth;
import org.springframework.security.core.AuthenticationException;
public class EmailPatternNotAllowedException extends Exception {
    public EmailPatternNotAllowedException(String msg)
    {
        super(msg);
    }
}
