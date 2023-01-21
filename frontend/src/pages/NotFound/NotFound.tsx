import React from 'react';
import { Title, Wrapper } from './NotFound.styles';
import Typography from '@mui/material/Typography';

const NotFound = (): JSX.Element => {
  return (
    <Wrapper>
      <Title variant='h1'>Błąd 404 😒</Title>
      <Typography variant="body2">Strona której szukasz nie istnieje. Mogła zmienić adres, została usunięta lub nigdy nie istniała</Typography>
    </Wrapper>
  );
};

export default NotFound;