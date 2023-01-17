import axios, { AxiosResponse } from 'axios';
import { TVote } from '../components/Post/Post.types';

export const createPost = async (data: unknown) => {
  const res = await axios
    .post('http://localhost:8080/posts', data)
    .then(res => res.data)
    .catch(err => console.error(err));
  return res;
};

export const downloadPosts = async () => {
  const res: AxiosResponse = await axios
    .get('http://localhost:8080/posts')
    .then((response) => response.data || []);
  return res;
};

export const downloadOnePost = async (id: number) => {
  const res: AxiosResponse = await axios
    .get(`http://localhost:8080/posts/${id}`)
    .then((response) => response.data || []);
  return res;
};

export const updatePost = async (data: unknown, id: number) => {
  const res = await axios
    .put(`http://localhost:8080/posts/${id}`, data)
    .then(res => res.data)
    .catch(err => console.error(err));
  return res;
};

export const deletePost = async (id: number) => {
  const res = await axios
    .delete(`http://localhost:8080/posts/${id}`)
    .then(res => res.data)
    .catch(err => console.error(err));
  return res;
};

export const updatePostVotes = async (postId: number, votes: number) => {
  const res = await axios
    .put(`http://localhost:8080/posts/${postId}`, votes)
    .then(res => res.data)
    .catch(err => console.error(err));
  return res;
};
