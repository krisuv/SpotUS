package pl.spot.us.backend.post;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import pl.spot.us.backend.comment.Comment;
import pl.spot.us.backend.user.User;
import pl.spot.us.backend.user.UserRepository;

import java.sql.Timestamp;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

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

    @ManyToOne(cascade=CascadeType.ALL)
    @JoinColumn(name = "user_id")
    private User user;

    public Post(TagEnum tag, String content, Timestamp publishDate, Long votes, User user) {
        this.tag = tag;
        this.content = content;
        this.publishDate = publishDate;
        this.votes = votes;
        this.user = user;
    }

    public Post(Optional<Post> byId) {
    }
}
