package pl.spot.us.backend.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import pl.spot.us.backend.entity.User;
import pl.spot.us.backend.repository.UserRepository;

@Service
public class UserRepositoryDetailsService implements UserDetailsService {
    private UserRepository userRepo;

    @Autowired
    public UserRepositoryDetailsService(UserRepository userRepo){
        this.userRepo = userRepo;
    }

    @Override
    public UserDetails loadUserByUsername(String login)
        throws UsernameNotFoundException{
        User user = userRepo.findByUsername(login);
        if (user !=null){
            return user;
        }
        throw new UsernameNotFoundException(
                "Użytkownik " + login + "nie został znaleziony");
        }

}
