import axios, { AxiosResponse } from 'axios';

export const createUser = async (data: string) => {
  try {
    JSON.parse(data);
  } catch (error) {
    throw new Error('Passing data is not a JSON string!');
  }
  const res: AxiosResponse = await axios
    .post('/api/auth/register', data, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.data)
    .catch(err => {
      console.error(err);
    });
  return res;
};
// data jest intefejse, getch w linijce 29
export const loginUser = async (data: string) => {
  try {
    JSON.parse(data);
  } catch (error) {
    throw new Error('Passing data is not a JSON string!');
  }
  const res: AxiosResponse = await axios
      .post('/api/auth/authenticate', data, {
        headers: {
          'Content-Type': 'application/json',
            'Accepts': 'application/json'
        }
      })
      .then(res => res.data)
      .catch(err => {
        console.error(err);
      });
  return res;
};