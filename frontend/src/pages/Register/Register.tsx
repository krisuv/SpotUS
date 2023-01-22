import React, {useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Wrapper from '@mui/material/Container';
import { Copyright } from '../../components';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../../api/User.api';
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;
import {ErrorMessage} from "./Register.styles";


const Register = (): JSX.Element => {
  const navigate = useNavigate();
  const [errorEmailMessage, setEmailErrorMessage] = useState('');
  const [errorUsernameMessage, setUsernameErrorMessage] = useState('');

  const handleRegister = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const userData = {
      email: data.get('email')?.toString() || '',
      password: data.get('password')?.toString() || '',
      firstName: data.get('firstName')?.toString() || '',
      lastName: data.get('lastName')?.toString() || '',
      username: data.get('username')?.toString() || '',
    };

    const jwtObject = await createUser(userData);
    if(jwtObject.includes('email')){
      setEmailErrorMessage(jwtObject);
    } else if (jwtObject.includes('nick')){
      setUsernameErrorMessage(jwtObject);
    }
    const jwt = jwtObject.token;
    if(jwt){
      navigate('/login');
    }
  };

  return (
    <>
      <Wrapper component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Zarejestruj się,
          </Typography>
          <Typography variant='body1'>
            następnie zostaniesz przeniesiony na stronę logowania. Zapamiętaj dane!
          </Typography>
          <Box component="form" onSubmit={handleRegister} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                    required
                    fullWidth
                    type="username"
                    id="username"
                    label="Nick"
                    name="username"
                    autoComplete="username"
                />
                <ErrorMessage>{errorUsernameMessage}</ErrorMessage>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  type='email'
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
                <ErrorMessage>{errorEmailMessage}</ErrorMessage>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="Nie będę obrażać innych użytkowników ani zamieszczać niecenzuralnych treści."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Zatwierdź
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Masz już konto? Zaloguj
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Wrapper>
    </>
  );
};

export default Register;
