import React, { useRef } from 'react';
import { TextField, Typography } from '@mui/material';
import { tags } from '../Post/Post.types';
import { Container, PublishIcon, Wrapper, Button, Textarea, AutoComplete, Form, Heading } from './PostEditor.styles';
import usePostProcess from '../../hooks/usePostProcess';
import {createPost} from "../../api/Post.api";


const PostEditor = (): JSX.Element => {
  const { post, setPost, handlePostValidation,  findError } = usePostProcess();
  const autocompleteRef = useRef<any>(null);

  /**
  * A function that takes in an event and sets the state of the post.
  * @param event - React.ChangeEvent<HTMLTextAreaElement>
  */
  const handleTextFieldChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const field = event.target.name;
    setPost({ ...post, [field]: event.target.value });
  };

  /**
 * It takes an event and a value, and then it sets the post state to the value of the input field
 * @param _event - React.SyntheticEvent<Element, Event>
 * @param {any} value - The value of the input.
 */
  const handleAutocompleteChange = (_event: React.SyntheticEvent<Element, Event>, value: any) => {
    const field = autocompleteRef.current.querySelector('input').id;
    if (value?.label) {
      setPost({ ...post, [field]: value.label });
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    const isPostValid = await handlePostValidation();
    if (isPostValid) {
      await createPost(post);
    } else {
      event.preventDefault();
    }
  };

  return (
    <Wrapper>
      <Container>
        <Heading variant="h3" color="primary">Co u ciebie słychać?</Heading>
        <Form onSubmit={handleSubmit} id='postForm'>
          <Textarea spellCheck='false' name='content' onChange={handleTextFieldChange} />
          {findError('content')}
          <AutoComplete
            disablePortal
            id="tag"
            ref={autocompleteRef}
            onChange={handleAutocompleteChange}
            options={tags}
            renderInput={(params) => <TextField color='secondary' {...params} label="Tag" />}
          />
          {findError('tag')}
        </Form>
      </Container>
      <Button
        form='postForm'
        type='submit'
        variant='text'
        color='primary'
        endIcon={<PublishIcon />}>
        Dodaj
      </Button>
    </Wrapper>
  );
};

export default PostEditor;