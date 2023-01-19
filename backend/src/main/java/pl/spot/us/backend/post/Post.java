package pl.spot.us.backend.post;

import com.fasterxml.jackson.annotation.JsonBackReference;
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

    @OneToMany(mappedBy = "post")
    private Collection<Comment> comments;

    @ManyToOne
    @JoinColumn(name="user_id", nullable=false)
    private User user;

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Collection<Comment> getComments() {
        return comments;
    }

    public void setComments(Collection<Comment> comments) {
        this.comments = comments;
    }

    private Long votes;
}
