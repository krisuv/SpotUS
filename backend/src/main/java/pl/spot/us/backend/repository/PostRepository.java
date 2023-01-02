package pl.spot.us.backend.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import pl.spot.us.backend.entity.Post;

import java.util.List;
@Repository
public class PostRepository {
    @Autowired
    private JdbcTemplate jdbcTemplate;

    public int save(Post post){
       jdbcTemplate.update("INSERT INTO Post(tag,content,title) VALUES(?,?)",post.getTag(),post.getContent(),post.getTitle());
        return 1;
    }
}
