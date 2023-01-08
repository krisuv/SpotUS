import { Typography } from '@mui/material';
import React from 'react';
import { Title, Container, Submit } from './Announcement.styles';
import { IAnnouncement } from './Announcement.types';

const Announcement = (props: IAnnouncement): JSX.Element => {
  const { author, title, content, buttonText } = props;
  return (
    <Container>
      <Typography>@{author}</Typography>
      <Title variant='h3'>{title}</Title>
      <Typography>{content}</Typography>
      <Submit variant='contained' color='secondary'>{buttonText}</Submit>
    </Container>
  );
};

export default Announcement;