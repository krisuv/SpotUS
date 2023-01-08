import React from 'react';
import { Button } from '@mui/material';
import { Container } from './Contact.styles';

const Contact = (): JSX.Element => {
  return (
    <Container>
      <h1>Contact</h1>
      <Button color="primary" variant="contained">click me</Button>
    </Container>
  );
};

export default Contact;