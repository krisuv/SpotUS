package pl.spot.us.backend.post;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import pl.spot.us.backend.comment.Comment;

import java.sql.Timestamp;
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

    private String username;

    private String content;

    private Timestamp publishDate;

    @OneToMany(mappedBy="post")
    @JsonBackReference
    private List<Comment> comments;

    private Long votes;
}
