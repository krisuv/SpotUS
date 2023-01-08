import { IPost } from './Post.types';
import React from 'react';
import { Container, UserInfo, WrapperLeft, WrapperRight, CommentIcon, Comments, ArrowDown, ArrowUp, Votes } from './Post.styles';
import Typography from '@mui/material/Typography';


{/* <Avatar src='https://placekitten.com/40/40' alt='' /> */ }

const Post = (props: IPost): JSX.Element => {
  const { tag, username, content, commentsCount, publishDate, votes } = props;
  return (
    <Container category={tag}>
      <WrapperLeft>
        <UserInfo>
          <h2>@{tag}</h2>
          <h3>{username}</h3>
        </UserInfo>
        <Typography>{content}</Typography>
        <Comments>
          <CommentIcon />
          <Typography>{commentsCount}</Typography>
        </Comments>
      </WrapperLeft>
      <WrapperRight>
        <Typography>{publishDate}</Typography>
        <Votes>
          <Typography variant='body2'>...</Typography>
          <ArrowUp />
          <Typography variant='body2'>{votes}</Typography>
          <ArrowDown />
        </Votes>
      </WrapperRight>
    </Container>
  );
};

export default Post;