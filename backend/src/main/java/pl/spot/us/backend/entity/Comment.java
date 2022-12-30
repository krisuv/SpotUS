package pl.spot.us.backend.entity;

import javax.persistence.*;

@Entity
@Table(name = "Comment")
public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private Long id;

    // todo klucz obcy do user
    // to twórca komentarza
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @Column(name = "postId")
    private Long postId;

    @Column(name = "content")
    private String content;

    public Comment(Long id, User user, Long postId, String content) {
        this.id = id;
        this.user = user;
        this.postId = postId;
        this.content = content;
    }
    public Comment(){};

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Long getPostId() {
        return postId;
    }

    public void setPostId(Long postId) {
        this.postId = postId;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }
}
