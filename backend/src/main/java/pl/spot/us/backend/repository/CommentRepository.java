package pl.spot.us.backend.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import pl.spot.us.backend.entity.Comment;
import pl.spot.us.backend.entity.Post;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

@Repository
public class CommentRepository {
    @Autowired
    private JdbcTemplate jdbc;

    public int save(Comment comment){
        jdbc.update("INSERT INTO Comment ( ID, CONTENT, CREATIONDATE, POST ) " +
                        "VALUES(?, ?, ?, ?)",
                comment.getId(),
                comment.getContent(),
                comment.getCreationDate(),
                comment.getPostId());
        return 1;
    }

    //comment

    public List<Comment> getAll() {
        List<Comment> comments = jdbc.query("SELECT * FROM Comment", BeanPropertyRowMapper.newInstance(Comment.class));
        return comments;
    }
    public Comment getById ( Long id){
        return jdbc.queryForObject("SELECT * FROM Comment WHERE id = ?",
                BeanPropertyRowMapper.newInstance(Comment.class), id);
    }

    public int delete (Long id) {
        jdbc.update("DELETE FROM Post WHERE id = ?", id);
        return 1;
    }

}
