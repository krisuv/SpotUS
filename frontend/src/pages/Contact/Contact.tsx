import { Grid } from '@mui/material';
import React from 'react';
import Announcement from '../../components/Announcement/Announcement';
import { becomeAdmin } from '../../mocks/Annoucement.mocks';
import { GridWrapper, Heading, InfoText } from '../../styles/commonStyles';
import { ContactFormWrapper } from './Contact.styles';

const Contact = (): JSX.Element => {
  return (
    <>
      <GridWrapper
        container
        justifyContent={'center'}
        columnSpacing={{ md: 5, lg: 10 }}
        rowSpacing={{ xs: 4, sm: 6, md: 10 }}
      >
        <ContactFormWrapper item md={6} >
          <Heading variant='h1'>Skontaktuj się z nami</Heading>
          <InfoText variant="body1">
            lub bezpośrednio przez formularz 👇
          </InfoText>
        </ContactFormWrapper>
        <Grid item md={6} lg={5}>
          <Announcement {...becomeAdmin} />
        </Grid>
      </GridWrapper>
    </>
  );
};

export default Contact;