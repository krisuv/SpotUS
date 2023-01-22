package pl.spot.us.backend.auth;

public class UsernameAlreadyTakenException extends Exception {
    public UsernameAlreadyTakenException(String msg) {
        super(msg);
    }
}
