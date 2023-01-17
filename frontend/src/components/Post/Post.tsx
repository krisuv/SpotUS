import React, { useEffect, useState } from 'react';
import { IPost, TVote } from './Post.types';
import { PostContainer, UserInfo, WrapperLeft, WrapperRight, CommentIcon, CancelVote, Comments, ArrowDown, ArrowUp, Votes, Wrapper, CommentsContainer, CommentContainer } from './Post.styles';
import Typography from '@mui/material/Typography';
import { IComment } from '../Comment/Comment.types';
import mockCommentsJson from '../../mocks/Comment.mocks.json';
import { downloadComments } from '../../api/Comment.api';


{/* <Avatar src='https://placekitten.com/40/40' alt='' /> */ }

const Post = (props: IPost): JSX.Element => {
  const { id, tag, username, content, commentsCount, publishDate, votes } = props;
  const [comments, setComments] = useState<IComment[]>([]);
  const [userVote, setUserVote] = useState<TVote>(0);

  useEffect(() => {
    console.log('download comments...');
    // updateVote()
  }, [userVote]);

  const loadComments = async () => {
    const dbComments = await downloadComments() as unknown as IComment[];
    if (dbComments && dbComments.length > 0) {
      setComments(dbComments);
    } else {
      console.error('Nie udało się pobrać komentarzy dla postu użytkownika ', username);
    }
  };

  const handleVote = (vote: TVote) => () => {
    userVote !== vote && setUserVote(vote);
  };

  return (
    <Wrapper>
      <PostContainer category={tag}>
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
            <ArrowUp onClick={handleVote(1)} />
            <Typography variant='body2'>{(votes || 0) + userVote}</Typography>
            <ArrowDown onClick={handleVote(-1)} />
            <CancelVote onClick={handleVote(0)} />
          </Votes>
        </WrapperRight>
      </PostContainer>
      <CommentsContainer>
        {
          //zamienić na comments
          mockCommentsJson.map((comment, index) => comment.postId === id && (
            <CommentContainer key={index}>
              <div>{comment.username}</div>
              <div>{comment.content}</div>
            </CommentContainer>
          ))
        }
      </CommentsContainer>
    </Wrapper>
  );
};

export default Post;