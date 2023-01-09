import React, { useState } from 'react';
import { Autocomplete, TextField } from '@mui/material';
import { IPost, tags } from '../Post/Post.types';
import { Container, PublishIcon, Wrapper, Button, Textarea } from './PostEditor.styles';
import axios from 'axios';
import { TComment } from '../Comment/Comment.types';

const PostEditor = (): JSX.Element => {
  const [post, setPost] = useState<IPost>({
    id: 0,
    username: '',
    tag: '',
    content: '',
    comments: [],
    votes: 0,
    publishDate: `${new Date()}`
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(post);
  };

  const handleTextFieldChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const field = event.target.name;
    console.log(event.target.value);
    setPost({ ...post, [field]: event.target.value });
  };

  const handleAutocompleteChange = (event: React.SyntheticEvent<Element, Event>, value: any) => {
    const target = event.target as HTMLInputElement;
    const field = target.id;
    console.log(value);
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