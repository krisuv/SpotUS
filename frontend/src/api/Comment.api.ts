import axios, { AxiosResponse } from 'axios';

export const createComment = async (data: unknown) => {
  const res = await axios
    .post('http://localhost:8080/comments', data)
    .then(res => res.data)
    .catch(err => console.error(err));
  return res;
};

export const getComments = async () => {
  const res: AxiosResponse = await axios
    .get('http://localhost:8080/comments')
    .then((response) => response.data || []);
  return res;
};

export const getOneComment = async (id: number) => {
  const res: AxiosResponse = await axios
    .get(`http://localhost:8080/comments/${id}`)
    .then((response) => response.data || []);
  return res;
};

export const updateComment = async (data: unknown, id: number) => {
  const res = await axios
    .put(`http://localhost:8080/comments/${id}`, data)
    .then(res => res.data)
    .catch(err => console.error(err));
  return res;
};

export const deleteComment = async (id: number) => {
  const res = await axios
    .delete(`http://localhost:8080/comments/${id}`)
    .then(res => res.data)
    .catch(err => console.error(err));
  return res;
};