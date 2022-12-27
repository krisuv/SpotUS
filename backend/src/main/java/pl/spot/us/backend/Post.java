package pl.spot.us.backend;

import javax.persistence.*;

@Entity
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "tag")
    private TagEnum tag;

    @Column(name = "content")
    private String content;

    @Column(name = "title" )
    private String title;

    // todo klucz obcy z user
    @Column(name = "userId")
    private Long userId;

    public Post(Long id, TagEnum tag, String content, String title, Long userId) {
        this.id = id;
        this.tag = tag;
        this.content = content;
        this.title = title;
        this.userId = userId;
    }

    public Post(){}

    public Long getId() {
        return id;
    }

    public TagEnum getTag() {
        return tag;
    }

    public String getContent() {
        return content;
    }

    public String getTitle() {
        return title;
    }

    public Long getUserId() {
        return userId;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setTag(TagEnum tag) {
        this.tag = tag;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }
}
