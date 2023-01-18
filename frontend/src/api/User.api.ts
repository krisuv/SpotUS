import axios, { AxiosResponse } from 'axios';

export const createUser = async (data: string) => {
  try {
    JSON.parse(data);
  } catch (error) {
    throw new Error('Passing data is not a JSON string!');
  }
  const res: AxiosResponse = await axios
    .post('http://localhost:8080/auth/register', data)
    .then(res => res.data)
    .catch(err => {
      console.error(err);
    });
  return res;
};