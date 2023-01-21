package pl.spot.us.backend.comment;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import pl.spot.us.backend.post.Post;
import pl.spot.us.backend.user.User;

@Component
public class CommentMapper {

    public CommentDTO toDTO(Comment comment) {
        return CommentDTO.builder()
                .id(comment.getId())
                .username(comment.getUser().getUsername())
                .content(comment.getContent())
                .build();
    }

    public Comment toEntity(CommentDTO commentDTO, Long postId) {
        User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        return Comment.builder()
                .id(commentDTO.getId())
                .user(user)
                .content(commentDTO.getContent())
                .post(Post.builder().id(postId).build())
                .build();
    }
}
