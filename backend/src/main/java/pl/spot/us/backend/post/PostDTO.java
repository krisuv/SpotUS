package pl.spot.us.backend.post;

import lombok.Builder;
import lombok.Data;

import java.sql.Timestamp;

@Data
@Builder
public class PostDTO {

    private Long id;

    private String username;

    private TagEnum tag;

    private String content;

    private Timestamp publishDate;

    private Long votes;

    private Integer commentsCount;
}
