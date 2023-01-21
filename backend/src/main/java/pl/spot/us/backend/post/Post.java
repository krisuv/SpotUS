package pl.spot.us.backend.post;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.*;
import pl.spot.us.backend.comment.Comment;
import pl.spot.us.backend.user.User;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

@Builder
@Entity
@Getter
@Setter
@Table(name = "POST")
@NoArgsConstructor
@AllArgsConstructor
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", updatable = false, nullable = false)
    private Long id;

    @Enumerated(EnumType.STRING)
    private TagEnum tag;
    @Column(length = 1024)
    private String content;

    private Timestamp publishDate;

    private Long votes;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable=false)
    private User user;

    @OneToMany(
            mappedBy = "post",
            cascade = CascadeType.ALL,
            orphanRemoval = true
    )
    private List<Comment> comments = new ArrayList<>();
}
