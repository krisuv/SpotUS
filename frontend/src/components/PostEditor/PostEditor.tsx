import React, { useEffect, useRef, useState } from 'react';
import { Autocomplete, TextField } from '@mui/material';
import { IPost, tags } from '../Post/Post.types';
import { Container, PublishIcon, Wrapper, Button, Textarea } from './PostEditor.styles';
import axios from 'axios';
import { TComment } from '../Comment/Comment.types';
import { validatePost } from './PostEditor.helpers';
import { TCreatePost } from './PostEditor.types';
import { createPost } from '../../api/createPost';

const userName = 'koperek';

const PostEditor = (): JSX.Element => {
  const [post, setPost] = useState<TCreatePost>({
    tag: '',
    content: '',
  });
  const [validationErrors, setValidationErrors] = useState<string[]>([]);
  const autocompleteRef = useRef<any>(null);

  useEffect(() => {
    console.log('constant validation of input fields...');
  }, [post]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { tag, content } = post;
    const validationResult = await validatePost({ tag, content });
    if (validationResult instanceof Object) {
      await createPost({
        username: userName,
        publishDate: new Date().toString(),
        ...validationResult
      } satisfies IPost);
    } else if (Array.isArray(validationResult)) {
      setValidationErrors(validationResult);
    }
  };

  const handleTextFieldChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const field = event.target.name;
    console.log(event.target.value);
    setPost({ ...post, [field]: event.target.value });
  };

  const handleAutocompleteChange = (_event: React.SyntheticEvent<Element, Event>, value: any) => {
    const field = autocompleteRef.current.querySelector('input').id;
    if (value?.label) {
      setPost({ ...post, [field]: value.label });
    }
  };

  return (
    <Wrapper>
      <Container>
        <form onSubmit={handleSubmit} id='commentForm'>
          <Autocomplete
            disablePortal
            id="tag"
            ref={autocompleteRef}
            onChange={handleAutocompleteChange}
            options={tags}
            renderInput={(params) => <TextField {...params} label="Tag" />}
          />
          <Textarea spellCheck='false' name='content' onChange={handleTextFieldChange} />
        </form>
      </Container>
      <Button form='commentForm' type='submit' variant='text' color='primary' endIcon={<PublishIcon />}>Dodaj</Button>
    </Wrapper>
  );
};

export default PostEditor;