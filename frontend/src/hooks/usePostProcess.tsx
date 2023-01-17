import React from 'react';
import { useEffect, useState } from 'react';
import { createPost } from '../api/Post.api';
import { IPost } from '../components/Post/Post.types';
import { formatDate, validatePost } from '../components/PostEditor/PostEditor.helpers';
import { TCreatePost } from '../components/PostEditor/PostEditor.types';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';


const usePostProcess = () => {
  const [post, setPost] = useState<TCreatePost>({
    tag: '',
    content: '',
    username: 'koperek'
  });
  const [errors, setErrors] = useState<string[] | null>(null);

  useEffect(() => {
    if (errors !== null) {
      handlePostValidation();
    }
  }, [post]);

  /**
 * It validates the post, and if there are any errors, it sets the errors state and returns false.
 * Otherwise, it sets the errors state to an empty array and returns true
 * @returns An array of errors or an empty array.
 */
  const handlePostValidation = async () => {
    const { tag, content, username } = post;
    const validationResult = await validatePost({ tag, content, username });
    if (Array.isArray(validationResult)) {
      setErrors(validationResult);
      return false;
    }
    setErrors([]);
    return true;
  };

  /**
 * It sends a post to the server
 * @param data - Pick<IPost, 'tag' | 'content' | 'username'>
 */
  const sendPost = async (data: Pick<IPost, 'tag' | 'content' | 'username'>) => {
    console.log('sending post...');
    await createPost({
      publishDate: formatDate(new Date()),
      ...data,
    } satisfies IPost);
    console.log('post sent(or not 😒)...');
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isPostValid = await handlePostValidation();
    if (isPostValid) {
      sendPost(post);
    }
  };

  const validationErrors = () => {
    const errorData = errors?.map(
      error => error.includes('tag') ?
        { key: 'tag', value: error }
        : { key: 'content', value: error });
    return errorData;
  };

  const findError = (key: string) => {
    const errors = validationErrors();
    const matchingError = errors?.find(error => error.key === key);
    return (matchingError ?
      <ErrorMessage value={matchingError.value} />
      : <></>);
  };

  return {
    post,
    setPost,
    handleSubmit,
    findError
  };
};

export default usePostProcess;