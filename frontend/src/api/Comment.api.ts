import axios, { AxiosResponse } from 'axios';
import { IUserComment } from '../components';

export const createComment = async (data: IUserComment) => {
  try {
    const res = await axios.post('/api/comments', data);
    return res.data;
  } catch(error) {
    console.error(error);
    return null;
  }
};

export const getComments = async (postId: number) => {
  const jwt = localStorage.getItem('user') || '<< NO JWT >>';
  try {
    const res: AxiosResponse = await axios.get(`/api/comments/byPostId/${postId}`, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${jwt}`
      }
    });
    return res.data || [];
  } catch(error){
    console.error(error);
  }
};

export const getOneComment = async (id: number) => {
  const res: AxiosResponse = await axios
    .get(`/api/comments/${id}`)
    .then((response) => response.data || []);
  return res;
};

export const updateComment = async (data: unknown, id: number) => {
  const res = await axios
    .put(`/api/comments/${id}`, data)
    .then(res => res.data)
    .catch(err => console.error(err));
  return res;
};

export const deleteComment = async (id: number) => {
  const res = await axios
    .delete(`/api/comments/${id}`)
    .then(res => res.data)
    .catch(err => console.error(err));
  return res;
};