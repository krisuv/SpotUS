package pl.spot.us.backend.comment;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.*;
import pl.spot.us.backend.post.Post;
import pl.spot.us.backend.user.User;

@Entity
@Getter
@Setter
@Builder
@Table(name = "COMMENT")
@AllArgsConstructor
@NoArgsConstructor
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", updatable = false, nullable = false)
    private Long id;

    private String content;

    @ManyToOne
    @JoinColumn(name="post_id", nullable=false)
    private Post post;

    @ManyToOne
    @JoinColumn(name="user_id", nullable=false)
    private User user;

}
