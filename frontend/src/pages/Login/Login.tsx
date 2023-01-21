import React, {useContext} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
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
import { loginUser } from '../../api/User.api';
import { useNavigate } from 'react-router-dom';
import { ILoginUser } from '../../types';
import {UserContext} from '../../context';

const Login = (): JSX.Element => {
  const navigate = useNavigate();
  const { setUserToken } = useContext(UserContext);

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const userData: ILoginUser = {
      username: data.get('username')?.toString() || '',
      password: data.get('password')?.toString() || ''
    };
    console.log(userData);
    const jwtObject = await loginUser(userData);
    console.log(jwtObject);
    const jwt = jwtObject.token;
    console.log(jwt);

    if (!localStorage.getItem('user')) {
      localStorage.setItem('user', jwt);
      setUserToken(jwt);
    }
    navigate('/');
  };

  return (
    <>
      <Wrapper component="main" maxWidth="xs">
        <CssBaseline />
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
          <Typography variant="h5">
            Zaloguj
          </Typography>
          <Box component="form" onSubmit={handleLogin} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Nick"
              name="username"
              autoComplete="username"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              color='primary'
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Zaloguj
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/register" variant="body2">
                  Nie masz konta? Zarejestruj się!
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Wrapper>
    </>
  );
};

export default Login;