import { Typography } from '@mui/material';
import React from 'react';
import { Title, Container, Submit, Content } from './Announcement.styles';
import { IAnnouncement } from './Announcement.types';

const Announcement = (props: IAnnouncement): JSX.Element => {
  const { author, title, content, buttonText } = props;
  return (
    <Container>
      <Typography>@{author}</Typography>
      <Title variant='h2'>{title}</Title>
      <Content variant='body2'>{content}</Content>
      <Submit variant='contained' color='secondary'>{buttonText}</Submit>
    </Container>
  );
};

export default Announcement;