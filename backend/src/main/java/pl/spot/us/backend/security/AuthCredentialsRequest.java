package pl.spot.us.backend.security;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class AuthCredentialsRequest {

    public String username;
    public String password;
}
