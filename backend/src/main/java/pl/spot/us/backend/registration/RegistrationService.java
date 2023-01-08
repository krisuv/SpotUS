package pl.spot.us.backend.registration;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import pl.spot.us.backend.appUser.AppUser;
import pl.spot.us.backend.appUser.AppUserRoleEnum;
import pl.spot.us.backend.appUser.AppUserService;

@Service
@AllArgsConstructor
public class RegistrationService {

    private final AppUserService appUserService;
    private EmailValidator emailValidator;
    public String register(RegistrationRequest request) {
        boolean isEmailValid = emailValidator.test(request.getEmail());
        if(!isEmailValid) {
            //todo lepszy wyjątek rzucić
            throw new IllegalStateException("Email jest już zajęty");
        }
        return appUserService.signUpUser(
                new AppUser(
                        request.getFirstName(),
                        request.getLastName(),
                        request.getEmail(),
                        request.getPassword(),
                        AppUserRoleEnum.USER

                )
        );
    }


}
