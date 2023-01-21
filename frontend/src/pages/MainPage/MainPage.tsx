import React, { useEffect, useState } from 'react';
import { getPosts } from '../../api/Post.api';
import { Post } from '../../components';
import { IPost } from '../../components/Post/Post.types';
import PostEditor from '../../components/PostEditor/PostEditor';
import { Wall, StickySidebar } from './MainPage.styles';
import mockPostsJSON from '../../mocks/Post.mocks.json';
import { IMainPage } from './MainPage.types';
import { Typography } from '@mui/material';
import { GridWrapper } from '../../styles/commonStyles';

const mockPosts = mockPostsJSON.slice(0, 4) as IPost[];
const sponsoredPosts = mockPostsJSON.slice(4) as IPost[];

const MainPage = ({ userData }: IMainPage): JSX.Element => {
  const [posts, setPosts] = useState<IPost[]>([]);

  console.log('%c You are on Main Page for verified user', 'color: #47bbff');
  console.log('posts from database: ', posts);
  console.log('user data on Main Page: ', userData);

  const loadPosts = async () => {
    const dbPosts = await getPosts() as unknown as IPost[];
    console.log('dbPosts: ', dbPosts);
    if (dbPosts && dbPosts.length > 0) {
      setPosts(dbPosts);
    } else {
      console.error('Nie udało się pobrać postów');
    }
  };

  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <GridWrapper
      container
      justifyContent={'center'}
      columnSpacing={{ md: 5, lg: 10 }}
      rowSpacing={{ xs: 4, sm: 6, md: 10 }}
    >
      <Wall item md={6}>
        <Typography variant='h3'>Twoja tablica</Typography>
        <PostEditor />
        {
          mockPosts.map(post => (
            <Post key={post.id} {...post} />
          ))
        }
      </Wall>
      <StickySidebar item md={4}>
        <Typography variant='h3'>Zobacz, co cię ominęło w tym tygodniu!</Typography>
        {
          sponsoredPosts.map(post => (
            <Post key={post.id} {...post} />
          ))
        }
      </StickySidebar>
    </GridWrapper>
  );
};

export default MainPage;