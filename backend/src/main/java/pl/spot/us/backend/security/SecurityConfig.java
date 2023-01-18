package pl.spot.us.backend.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import pl.spot.us.backend.token.SecurityToken;
import pl.spot.us.backend.user.UserRepository;

import javax.servlet.http.HttpServletResponse;

@Configuration
@EnableWebSecurity
@EnableMethodSecurity
public class SecurityConfig {

    private final JpaUserDetailsService jpaUserDetailsService;

    private final UserRepository userRepository;

    private JwtFilter jwtFilter;

    public SecurityConfig(JpaUserDetailsService jpaUserDetailsService, JwtFilter jwtFilter, UserRepository userRepository) {
        this.jpaUserDetailsService = jpaUserDetailsService;
        this.jwtFilter = jwtFilter;
        this.userRepository =  userRepository;
    }

//    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
//        auth.userDetailsService(jpaUserDetailsService)
//                .passwordEncoder(passwordEncoder());
//    }

    @Bean
    public AuthenticationManager authenticationManager(
            AuthenticationConfiguration authenticationConfiguration) throws Exception {
        return authenticationConfiguration.getAuthenticationManager();
    }

    @Bean
    SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        return http
                .csrf(csrf -> csrf.ignoringAntMatchers("/h2/**"))
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .exceptionHandling()
                .authenticationEntryPoint((request, response, exception) -> {
                    response.sendError(HttpServletResponse.SC_UNAUTHORIZED, exception.getMessage());
                })
                .and()
                .authorizeRequests(auth -> auth
                        .antMatchers("/h2/**").permitAll()
                        .antMatchers("/auth/**").permitAll()
                        .anyRequest().authenticated())
                .userDetailsService(jpaUserDetailsService)
                .headers(headers -> headers.frameOptions().sameOrigin())
                .httpBasic(Customizer.withDefaults())
                .addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class)
                .build();
    }

    @Bean
    PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
