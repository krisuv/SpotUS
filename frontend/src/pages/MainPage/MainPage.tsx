import { Grid } from '@mui/material';
import React from 'react';
import { Post } from '../../components';
import posts from '../../mocks/Post.mocks';
import { Container } from './MainPage.styles';

const MainPage = (): JSX.Element => {
  return (
    <Grid container spacing={4} justifyContent='center'>
      {/* <h1>MainPage</h1> */}
      <Container item md={6} isMain>
        {        
          posts.map(post => (
            <Post key={post.id} {...post} />
          ))
        }     
      </Container>
      <Container item md={4}>
        <h2>Zobacz, co cię ominęło w tym tygodniu!</h2>
        {        
          posts.map(post => (
            <Post key={post.id} {...post} />
          ))
        }     
      </Container>
    </Grid>
  );
};

export default MainPage;