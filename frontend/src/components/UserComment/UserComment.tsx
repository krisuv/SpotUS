import React, { ChangeEvent, useState } from 'react';
import { Button, PublishIcon, Textarea, Wrapper } from '../../styles/commonStyles';
import {createComment} from '../../api/Comment.api';
import {IPostData} from "./UserComment.types";
import {redirect} from "react-router-dom";

const UserComment = ({postId}: IPostData): JSX.Element => {
  const [comment, setComment] = useState('');

  const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    const createdComment = await createComment({postId, content: comment});
    if(!createdComment){
      event.preventDefault();
    }
  };

  return (
    <form onSubmit={handleSubmit} id='commentForm'>
      <Wrapper>
        <Textarea value={comment} onChange={handleInputChange} />
        <Button
          form='commentForm'
          type='submit'
          variant='text'
          color='primary'
          endIcon={<PublishIcon />}>
          Dodaj
        </Button>
      </Wrapper>
    </form>
  );
};

export default UserComment;