import axios from 'axios';
import { IPost } from '../components/Post/Post.types';

const downloadPosts = async () => {
  const dbPosts = await axios
    .get('http://localhost:8080/posts/')
    .then((response) => response.data || []);
  return dbPosts;
};

export default downloadPosts;