package pl.spot.us.backend.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.apache.catalina.User;

import javax.persistence.*;
import java.util.Date;

@Data
@Entity
@Table(name = "COMMENT")
@RequiredArgsConstructor
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", updatable = false, nullable = false)
    private Long id;

//    private AppUser appUser;

    private String content;

    @ManyToOne
    @JoinColumn(name="post_id", nullable=false)
    @JsonBackReference
    private Post post;

    public Comment(Long id, String content, Post post) {
        this.id = id;
        this.content = content;
        this.post = post;
    }
}
