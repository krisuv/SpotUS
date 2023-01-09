import React, { useEffect, useState } from 'react';
import { IPost } from './Post.types';
import { Container, UserInfo, WrapperLeft, WrapperRight, CommentIcon, Comments, ArrowDown, ArrowUp, Votes } from './Post.styles';
import Typography from '@mui/material/Typography';
import { TComment } from '../Comment/Comment.types';


{/* <Avatar src='https://placekitten.com/40/40' alt='' /> */ }

const Post = (props: IPost): JSX.Element => {
  const { id, tag, username, content, publishDate, votes } = props;
  // const commentsCount = comments.length || 0;
  // const [comments, setComments] = useState<TComment[]>([]);
  useEffect(() => {
    console.log('download comments...');
  }, []);
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
          <Typography>{0}</Typography>
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