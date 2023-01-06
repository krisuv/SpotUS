package pl.spot.us.backend.entity;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Data
@RequiredArgsConstructor
public class Post {


    private Long id;

    private TagEnum tag;

    private String content;

    private String title;

//    private AppUser appUser;

//    private List<Comment> comments;

    private Date creationDate;
}
