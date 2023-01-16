package pl.spot.us.backend;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.security.crypto.password.PasswordEncoder;
import pl.spot.us.backend.user.User;
import pl.spot.us.backend.user.UserRepository;

//@ComponentScan(basePackages = "pl.spot.us.backend")
@SpringBootApplication
@EntityScan("pl.spot.us.backend")
public class BackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}

//	CommandLineRunner commandLineRunner(UserRepository users, PasswordEncoder encoder) {
//		return args -> {
//			users.save(new User("user", encoder.encode("password"), "NORMAL_USER"));
//		};
//	}

}
