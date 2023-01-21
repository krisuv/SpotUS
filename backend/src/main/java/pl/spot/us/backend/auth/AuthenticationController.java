package pl.spot.us.backend.auth;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthenticationController {

    private final AuthenticationService service;

    @PostMapping("/register")
    public ResponseEntity register(
            @RequestBody RegisterRequest request
    ) {
        try {
            return ResponseEntity.ok(service.register(request));
        }
        catch (UserAlreadyExistsException exception) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Użytkownik już istnieje");
        }
    }

    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse> authenticate(

            @RequestBody AuthenticationRequest request
    ) {
        System.out.println(request.getUsername());
        System.out.println(request.getPassword());
        return ResponseEntity.ok(service.authenticate(request));
    }

    @GetMapping("/hello")
    public String hello() {
        return "hello";
    }

}
