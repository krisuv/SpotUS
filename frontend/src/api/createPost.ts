import axios from 'axios';

export const createPost = async (data: unknown) => {
  const res = await axios
    .post('http://localhost:8080/posts', data)
    .then(res => res.data)
    .catch(err => console.error(err));
  return res;
};