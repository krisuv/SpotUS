package pl.spot.us.backend.comment;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import pl.spot.us.backend.post.Post;

@Data
@Entity
@Table(name = "COMMENT")
@RequiredArgsConstructor
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", updatable = false, nullable = false)
    private Long id;

    private String username;

    private String content;

    @ManyToOne
    @JoinColumn(name="post_id", nullable=false)
    @JsonBackReference
    private Post post;

    public Comment(Long id, String username, String content, Post post) {
        this.id = id;
        this.username = username;
        this.content = content;
        this.post = post;
    }
}
