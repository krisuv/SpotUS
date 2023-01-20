import React, { useEffect, useState } from 'react';
import { IPost, TVote } from './Post.types';
import { PostContainer, UserInfo, WrapperLeft, WrapperRight, CommentIcon, Comments, ArrowDown, ArrowUp, Votes, Wrapper, CommentsContainer } from './Post.styles';
import { IComment } from '../Comment/Comment.types';
import mockCommentsJson from '../../mocks/Comment.mocks.json';
import { downloadComments } from '../../api/Comment.api';
import UserComment from '../UserComment/UserComment';
import { dateFormat } from '../../formatters';
import Comment from '../Comment/Comment';
import { IconButton, Typography } from '@mui/material';



{/* <Avatar src='https://placekitten.com/40/40' alt='' /> */ }

const Post = (props: IPost): JSX.Element => {
  const { id, tag, username, content, commentsCount, publishDate, votes } = props;
  const [comments, setComments] = useState<IComment[]>([]);
  const [userVote, setUserVote] = useState<TVote>(0);
  const [showComments, setShowComments] = useState(false);
  const date = dateFormat(publishDate);
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
    console.log(vote);
    console.log(userVote);
    userVote !== vote && setUserVote(vote);
  };

  const handleShowComments = () => {
    setShowComments(prev => !prev);
  };

  return (
    <Wrapper>
      <PostContainer container category={tag}>
        <WrapperLeft item xs={9}>
          <UserInfo>
            <Typography variant='h2'>@{tag}</Typography>
            <Typography variant='h4'>{username}</Typography>
          </UserInfo>
          <Typography>{content}</Typography>
          <Comments onClick={handleShowComments}>
            <CommentIcon />
            <Typography>{commentsCount}</Typography>
          </Comments>
        </WrapperLeft>
        <WrapperRight item xs={2}>
          <Typography>{date}</Typography>
          <Votes>
            <Typography variant='body2'>...</Typography>
            <IconButton
              onClick={handleVote(1)}
              disabled={userVote === 1}
              color='third'
              size='small'
              aria-label='lubię to'>
              <ArrowUp />
            </IconButton>
            <Typography variant='body2'>{(votes || 0) + userVote}</Typography>
            <IconButton
              onClick={handleVote(-1)}
              disabled={userVote === -1}
              color='third'
              size='small'
              aria-label='nie podoba mi się'>
              <ArrowDown  />
            </IconButton>
            {userVote !== 0 && (
              <Typography onClick={handleVote(0)}>
                Anuluj głos
              </Typography>
            )}
          </Votes>
        </WrapperRight>
      </PostContainer>
      {showComments && (
        <CommentsContainer>
          <Typography variant="h4" color="initial">Dodaj komentarz</Typography>
          <UserComment />
          {
            mockCommentsJson.map(({ username, content, postId }, index) => postId === id && (
              <Comment key={index} username={username} content={content} />
            ))
          }
        </CommentsContainer>
      )}
    </Wrapper>
  );
};

export default Post;