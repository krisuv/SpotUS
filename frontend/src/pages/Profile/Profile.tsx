import React from 'react';
import Avatar from '../../components/Avatar/Avatar';
import { TextField } from './Profile.styles';
import { UserData, Container } from './Profile.styles';

const Profile = (): JSX.Element => {
  return (
    <Container>
      <h1>Twój profil</h1>
      <Avatar src='https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' />
      <UserData>
        <TextField label='imię' variant='outlined' color='secondary'/>
        <TextField label='nazwisko' variant='outlined' color='secondary'/>
        <TextField label='nick' variant='outlined' color='secondary'/>
        <TextField label='e-mail' variant='outlined' color='secondary'/>
      </UserData>

    </Container>
  );
};

export default Profile;