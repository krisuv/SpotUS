package pl.spot.us.backend.post;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import pl.spot.us.backend.comment.Comment;
import pl.spot.us.backend.user.User;

import java.sql.Timestamp;
import java.util.Collection;
import java.util.List;

@Data
@Entity
@Table(name = "POST")
@RequiredArgsConstructor
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", updatable = false, nullable = false)
    private Long id;

    @Enumerated(EnumType.STRING)
    private TagEnum tag;

    private String content;

    private Timestamp publishDate;

    private Long votes;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    public Post(TagEnum tag, String content, Timestamp publishDate, Long votes, User user) {
        this.tag = tag;
        this.content = content;
        this.publishDate = publishDate;
        this.votes = votes;
        this.user = user;
    }
}
