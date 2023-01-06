package pl.spot.us.backend.entity;

import lombok.Data;
import lombok.RequiredArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Data
@Entity
@RequiredArgsConstructor
public class Comment {

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Long id;

//    private AppUser appUser;

    private String content;

    private Date creationDate;

    private Long postId;

    public Comment(Long id, String content, Date creationDate, Long postId) {
        this.id = id;
        this.content = content;
        this.creationDate = creationDate;
        this.postId = postId;
    }
}
