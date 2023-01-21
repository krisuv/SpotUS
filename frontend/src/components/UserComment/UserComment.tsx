import React, { ChangeEvent, useState } from 'react';
import { Button, PublishIcon, Textarea, Wrapper } from '../../styles/commonStyles';

const UserComment = (): JSX.Element => {
  const [comment, setComment] = useState('');

  const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(event.target.value);
  };

  const handleAddComment = async () => {
    console.log('send user comnent');
  };
  return (
    <form onSubmit={handleAddComment}>
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