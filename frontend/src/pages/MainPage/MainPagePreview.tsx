import React from 'react';
import { Post } from '../../components';
import { IPost } from '../../components/Post/Post.types';
import PostEditor from '../../components/PostEditor/PostEditor';
import { Wall, StickySidebar, Container } from './MainPage.styles';
import mockPostsJSON from '../../mocks/Post.mocks.json';
import Announcement from '../../components/Announcement/Announcement';
import { Typography } from '@mui/material';
import { registerAd } from '../../mocks/previewPageAd';

const previewPosts = mockPostsJSON as IPost[];

const MainPagePreview = (): JSX.Element => {
  console.log('%c You are on Main Page preview for unauthenticated visitor', 'color: #47bbff');

  return (
    <Container container justifyContent={'center'} spacing={10}>
      <Wall item md={6}>
        <Typography variant='h3'>Twoja tablica</Typography>
        <PostEditor />
        {
          previewPosts.map(post => (
            <Post key={post.id} {...post} />
          ))
        }
      </Wall>
      <StickySidebar item md={4}>
        <Announcement 
          author='SpotUS' 
          buttonText='Załóż konto' 
          content={registerAd} 
          title='Dołącz do nas!' />
      </StickySidebar>
    </Container>
  );
};

export default MainPagePreview;