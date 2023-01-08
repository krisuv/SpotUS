import { Grid } from '@mui/material';
import React from 'react';
import { Post } from '../../components';
import { posts, sponsoredPosts } from '../../mocks/Post.mocks';
import { Wall, StickySidebar, Container } from './MainPage.styles';

const MainPage = (): JSX.Element => {
  return (
    <Container container justifyContent={'center'} spacing={10}>
      <Wall item md={6}>
        <h2 style={{ fontSize: '20px' }}>Twoja tablica</h2>
        {
          posts.map(post => (
            <Post key={post.id} {...post} />
          ))
        }
      </Wall>
      <StickySidebar item md={4}>
        <h2 style={{ fontSize: '20px' }}>Zobacz, co cię ominęło w tym tygodniu!</h2>
        {
          sponsoredPosts.map(post => (
            <Post key={post.id} {...post} />
          ))
        }
      </StickySidebar>
    </Container>
  );
};

export default MainPage;