package pl.spot.us.backend.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import pl.spot.us.backend.entity.Post;

import java.util.List;
@Repository
public class PostRepository {
    @Autowired
    private JdbcTemplate jdbc;

    public int save(Post post){
       jdbc.update("INSERT INTO Post ( ID, TAG, CONTENT, TITLE, CREATIONDATE ) " +
                                "VALUES(?, ?, ?, ?, ?)",
                                post.getId(),
                                post.getTag().toString(),
                                post.getContent(),
                                post.getTitle(),
                                post.getCreationDate());
        return 1;
    }

    public List<Post> getAll() {
        List<Post> posts = jdbc.query("SELECT * FROM Post", BeanPropertyRowMapper.newInstance(Post.class));
        return posts;
    }
    public Post getById (Long id) {
        return jdbc.queryForObject("SELECT * FROM Post WHERE id = ?",
                    BeanPropertyRowMapper.newInstance(Post.class), id);
    }

    public int delete (Long id) {
        jdbc.update("DELETE FROM Post WHERE id = ?", id);
        return 1;
    }
}