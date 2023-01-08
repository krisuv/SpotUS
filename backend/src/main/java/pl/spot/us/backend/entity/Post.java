package pl.spot.us.backend.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Data;
import lombok.RequiredArgsConstructor;

import javax.persistence.*;
import java.util.Set;

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

    private String title;

    @OneToMany(mappedBy="post")
    @JsonBackReference
    private Set<Comment> comments;

//    private AppUser appUser;

//    private List<Comment> comments;
}
