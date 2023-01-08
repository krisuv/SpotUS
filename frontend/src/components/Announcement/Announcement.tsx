import { Button, Typography } from '@mui/material';
import React from 'react';
import { Title, Container } from './Announcement.styles';
import { IAnnouncement } from './Announcement.types';

const Announcement = (props: IAnnouncement): JSX.Element => {
  const { author, title, content, buttonText } = props;
  return (
    <Container>
      <Typography>@{author}</Typography>
      <Title variant='h3'>{title}</Title>
      <Typography>{content}</Typography>
      <Button variant='contained' color='secondary'>{buttonText}</Button>
    </Container>
  );
};

export default Announcement;