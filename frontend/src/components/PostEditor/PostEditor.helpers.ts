import { VPost, TCreatePost } from './PostEditor.types';

export const validatePost = async (data: TCreatePost) => (
  await VPost
    .validate(data, { abortEarly: false })
    .then(value => value)
    .catch(err => err.errors)
);

export const formatDate = (date: Date | string) => {
  if (typeof date === 'string') {
    return date;
  }
  const formattedDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}T${date.getHours()}:${date.getMinutes()}:00:000+00:00`;
  return formatDate;
};