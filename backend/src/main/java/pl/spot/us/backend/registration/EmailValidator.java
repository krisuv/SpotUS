package pl.spot.us.backend.registration;

import org.springframework.stereotype.Service;

import java.util.function.Predicate;

@Service
public class EmailValidator implements Predicate<String> {

    @Override
    public boolean test(String s) {
        // todo regex do walidacji maila
        return true;
    }
}
