import { Button, Autocomplete, TextareaAutosize, TextField } from '@mui/material';
import React from 'react';
import { tags } from '../Post/Post.types';

const PostEditor = (): JSX.Element => {

  return (
    <form>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis, doloribus illum modi dolores quisquam quibusdam! Expedita natus sequi est rerum.
      <Autocomplete
        disablePortal
        id="tagComboBox"
        options={tags}
        renderInput={(params) => <TextField {...params} label="Tag" />}
      />
      <TextareaAutosize />
      <Button type='submit' variant='contained' color='secondary'>Dodaj</Button>
    </form>
  );
};

export default PostEditor;