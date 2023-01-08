package pl.spot.us.backend.registration.token;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class ConfirmationTokenService {

    private final ConfirmationTokenRepository confirmationTokenRepository;

    public void safeConfirmationToken(ConfirmationToken token) {
        confirmationTokenRepository.save(token);
    }
}
