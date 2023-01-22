import axios, {AxiosError, AxiosResponse} from 'axios';
import { ILoginUser, IUser } from '../types';

export const createUser = async (data: IUser) => {
  try {
    const res: AxiosResponse = await axios
      .post('/api/auth/register', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      });
    return res.data;
  } catch (error) {
    console.log('%c register error: ', 'color: orange', error);
    if(error instanceof  AxiosError){
    return error.response?.data;
    }
  }
};

export const loginUser = async (data: ILoginUser) => {
  try {
    const res: AxiosResponse = await axios
      .post('/api/auth/authenticate', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      });
    return res.data;
  } catch (error) {
    console.log('%c register error: ', 'color: orange', error);
    if(error instanceof  AxiosError){
      return null;
    }
  }
};