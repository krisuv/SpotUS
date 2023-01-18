import React from 'react';
import { Button, PublishIcon, Textarea, Wrapper } from '../../styles/commonStyles';

const UserComment = (): JSX.Element => {
  return (
    <Wrapper>
      <Textarea />
      <Button
        form='commentForm'
        type='submit'
        variant='text'
        color='primary'
        endIcon={<PublishIcon />}>
        Dodaj
      </Button>
    </Wrapper>
  );
};

export default UserComment;