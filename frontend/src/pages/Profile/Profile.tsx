import React from 'react';
import {Heading, TextField} from '../../styles/commonStyles';
import { UserData, Container } from './Profile.styles';

const Profile = (): JSX.Element => {
  return (
    <Container>
      <Heading variant='h1'>Twój profil</Heading>
      <UserData>
        <TextField label='imię' variant='outlined' color='secondary' />
        <TextField label='nazwisko' variant='outlined' color='secondary' />
        <TextField label='nick' variant='outlined' color='secondary' />
        <TextField label='e-mail' variant='outlined' color='secondary' />
      </UserData>

    </Container>
  );
};

export default Profile;