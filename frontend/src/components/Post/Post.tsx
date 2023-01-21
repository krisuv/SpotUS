import React, { useEffect, useMemo, useState } from 'react';
import { IPost, TVote } from './Post.types';
import { PostContainer, UserInfo, WrapperLeft, WrapperRight, CommentIcon, Comments, ArrowDown, ArrowUp, Votes, Wrapper, CommentsContainer } from './Post.styles';
import { IComment } from '../Comment/Comment.types';
import mockCommentsJson from '../../mocks/Comment.mocks.json';
import { getComments } from '../../api/Comment.api';
import UserComment from '../UserComment/UserComment';
import { dateFormat } from '../../formatters';
import Comment from '../Comment/Comment';
import { IconButton, Typography } from '@mui/material';

const Post = (props: IPost): JSX.Element => {
  const { id, tag, username, content, commentsCount, publishDate, votes, previewVersion } = props;
  const [comments, setComments] = useState<IComment[]>([]);
  const [userVote, setUserVote] = useState<TVote>(0);
  const [showComments, setShowComments] = useState(false);
  const date = useMemo(() => (
    dateFormat(publishDate)
  ), [publishDate]);

  useEffect(() => {
    // updateVote()
  }, [userVote]);

  useEffect(() => {
    loadComments();
  }, [commentsCount]);

  useEffect(() => {
    console.log(comments);
  }, [comments]);


  const loadComments = async () => {
    const deliveredComments = await getComments(id) as unknown as IComment[]; //TODO: pobrać tylko dla zalogowane usera
    if (deliveredComments && deliveredComments.length > 0) {
      setComments(deliveredComments);
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
          <Comments>
            <IconButton onClick={handleShowComments}>
              <CommentIcon />
            </IconButton>
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
              <ArrowDown />
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
          {
            previewVersion
              ? (
                mockCommentsJson.map(({ username, content, postId }, index) => postId === id && (
                  <Comment key={index} username={username} content={content} />
                ))
              )
              : (
                <>
                  <Typography variant="h4" color="initial">Dodaj komentarz</Typography>
                  <UserComment postId={id}/>
                  {
                    comments.map(({ username, content, postId }, index) => (
                      <Comment key={index} username={username} content={content} />
                    ))
                  }
                </>
              )
          }
        </CommentsContainer>
      )}
    </Wrapper>
  );
};

export default Post;