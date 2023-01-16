package pl.spot.us.backend.user;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @GetMapping("")
    public String home() {
        return "Hello";
    }

    @PreAuthorize("hasRole('USER')")
    @GetMapping("/user/")
    public String user() {
        return "Hello user";
    }

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/admin/")
    public String admin() {
        return "Hello admin";
    }
}
