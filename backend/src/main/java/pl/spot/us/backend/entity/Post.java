package pl.spot.us.backend.entity;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;


@Entity
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private Long id;


    //todo tutaj nie lepiej lista?
    @Column(name = "tag")
    private TagEnum tag;

    @Column(name = "content")
    private String content;

    @Column(name = "title" )
    private String title;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    public Post(Long id, TagEnum tag, String content, String title, User user) {
        this.id = id;
        this.tag = tag;
        this.content = content;
        this.title = title;
        this.user = user;
    }

    public Post(){}

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public TagEnum getTag() {
        return tag;
    }

    public void setTag(TagEnum tag) {
        this.tag = tag;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
