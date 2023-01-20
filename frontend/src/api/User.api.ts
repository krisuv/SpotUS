import axios, { AxiosResponse } from 'axios';
import { ILoginUser } from '../types';

export const createUser = async (data: string) => {
  try {
    JSON.parse(data);
  } catch (error) {
    throw new Error('Passing data is not a JSON string!');
  }
  const res: AxiosResponse = await axios
    .post('http://localhost:8080/auth/register', data, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    })
    .then(res => res.data)
    .catch(err => {
      console.error(err);
    });
  return res;
};

export const loginUser = async (data: ILoginUser) => {
  const res: AxiosResponse = await axios
    .post('http://localhost:8080/auth/authenticate', JSON.stringify(data), {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    })
    .then(res => res.data)
    .catch(err => {
      console.error(err);
    });
  return res;
};