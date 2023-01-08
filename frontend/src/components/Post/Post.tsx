import { IPost } from './Post.types';
import React from 'react';
import { Container, Avatar, UserInfo } from './Post.styles';
import Typography from '@mui/material/Typography';


{/* <Avatar src='https://placekitten.com/40/40' alt='' /> */ }

const Post = (props: IPost): JSX.Element => {
  const { tag, username, content, commentsCount, publishDate, votes } = props;
  return (
    <Container>
      <div>
        <UserInfo>
          <h2>{tag}</h2>
          <h3>{username}</h3>
        </UserInfo>
        <Typography variant="body1">{content}</Typography>
        <Typography>{commentsCount}</Typography>
      </div>
      <div>
        <Typography>{publishDate}</Typography>
        <Typography>...</Typography>
        <Typography>{votes}</Typography>
      </div>
    </Container>
  );
};

export default Post;