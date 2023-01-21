package pl.spot.us.backend.post;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import pl.spot.us.backend.user.User;

@Component
public class PostMapper {

    public PostDTO toDTO(Post post) {
        return PostDTO.builder()
                .id(post.getId())
                .username(post.getUser().getUsername())
                .tag(post.getTag())
                .content(post.getContent())
                .publishDate(post.getPublishDate())
                .votes(post.getVotes())
                .commentsCount(isCommentCountNull(post) ? 0 : post.getComments().size())
                .build();
    }

    public Post toEntity(PostDTO postDTO) {
        User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        return Post.builder()
                .tag(postDTO.getTag())
                .content(postDTO.getContent())
                .publishDate(postDTO.getPublishDate())
                .votes(postDTO.getVotes())
                .user(user)
                .build();
    }

    public Boolean isCommentCountNull(Post post){
        return post.getComments() == null;
    }
}
