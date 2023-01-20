import axios, { AxiosResponse } from 'axios';
import { ILoginUser, IUser } from '../types';

export const createUser = async (data: IUser) => {
  try {
    const res: AxiosResponse = await axios
      .post('http://localhost:8080/auth/register', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      });
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const loginUser = async (data: ILoginUser) => {
  try {
    const res: AxiosResponse = await axios
      .post('http://localhost:8080/auth/authenticate', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      });
    return res.data;
  } catch (error) {
    console.error(error);
  }
};