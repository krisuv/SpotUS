import axios, { AxiosResponse } from 'axios';
import { TVote } from '../components/Post/Post.types';

export const createPost = async (data: unknown) => {
  const res: AxiosResponse = await axios
    .post('/api/posts', data)
    .then(res => res.data)
    .catch(err => console.error(err));
  return res;
};

export const downloadPosts = async () => {
  const jwt = sessionStorage.getItem('user') || '';
  console.log(jwt);
  if(JSON.parse(jwt)){
    const userObject = JSON.parse(jwt);
    const token = userObject.token;
    console.log(`Bearer ${token}`);

    try {
      const res: AxiosResponse = await axios
        .get('/api/posts', {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
          }
        });
        return res.data || [];
    } catch (error) {
      console.log(error);
    }
  }
};

export const downloadOnePost = async (id: number) => {
  const res: AxiosResponse = await axios
    .get(`/api/posts/${id}`)
    .then((response) => response.data || []);
  return res;
};

export const updatePost = async (data: unknown, id: number) => {
  const res: AxiosResponse = await axios
    .put(`/api/posts/${id}`, data)
    .then(res => res.data)
    .catch(err => console.error(err));
  return res;
};

export const deletePost = async (id: number) => {
  const res: AxiosResponse = await axios
    .delete(`/api/posts/${id}`)
    .then(res => res.data)
    .catch(err => console.error(err));
  return res;
};

export const updatePostVotes = async (postId: number, votes: number) => {
  const res: AxiosResponse = await axios
    .put(`/api/posts/${postId}`, votes)
    .then(res => res.data)
    .catch(err => console.error(err));
  return res;
};
