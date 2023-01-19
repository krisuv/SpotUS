import React, { useEffect, useState } from 'react';
import { downloadPosts } from '../../api/Post.api';
import { Post } from '../../components';
import { IPost } from '../../components/Post/Post.types';
import PostEditor from '../../components/PostEditor/PostEditor';
import { Wall, StickySidebar, Container } from './MainPage.styles';
import mockPostsJSON from '../../mocks/Post.mocks.json';
import { IMainPage } from './MainPage.types';

const mockPosts = mockPostsJSON.slice(0, 4) as IPost[];
const sponsoredPosts =  mockPostsJSON.slice(4) as IPost[];


const MainPage = ({userData}: IMainPage): JSX.Element => {
  const [posts, setPosts] = useState<IPost[]>([]);
  console.log('downloaded posts: ', posts);

  const loadPosts = async () => {
    const dbPosts = await downloadPosts() as unknown as IPost[];
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
    <Container container justifyContent={'center'} spacing={10}>
      <Wall item md={6}>
        <h2 style={{ fontSize: '20px' }}>Twoja tablica</h2>
        <PostEditor />
        {
          mockPosts.map(post => (
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