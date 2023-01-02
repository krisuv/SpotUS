package pl.spot.us.backend.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.jdbc.core.JdbcTemplate;
import pl.spot.us.backend.entity.Post;

import java.util.List;

public class PostRepository {
    @Autowired
    private JdbcTemplate jdbcTemplate;

    public int save(Post post){
//        jdbcTemplate.update("INSERT INTO ");
        return 1;
    }
}
