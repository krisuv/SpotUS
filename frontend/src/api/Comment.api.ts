import axios, { AxiosResponse } from 'axios';

export const createComment = async (data: unknown) => {
  const res = await axios
    .post('/api/comments', data)
    .then(res => res.data)
    .catch(err => console.error(err));
  return res;
};

export const downloadComments = async () => {
  const res: AxiosResponse = await axios
    .get('/api/comments')
    .then((response) => response.data || []);
  return res;
};

export const downloadOneComment = async (id: number) => {
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