package pl.spot.us.backend.comment;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class CommentDTO {

    private Long id;

    private String username;

    private String content;
}
