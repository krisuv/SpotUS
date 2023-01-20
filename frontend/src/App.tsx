import React, { useRef } from 'react';
import { AppWrapper, ContentWrapper } from './App.styles';
import Navbar from './components/Navbar/Navbar';
import { ThemeProvider } from '@mui/system';
import { spotUSTheme } from '../public';
import { AppRouter } from './routes';
import { decodeUserToken } from './utils';

const mockTokenTest = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

const App = () => {
  const userToken = useRef(localStorage.getItem('user') || null);
  console.log('%c Logged user: ', 'color: #3fd4ee', userToken.current);

  // we will use this
  // const user = userToken.current ? decodeUserToken(userToken.current) : null; 

  // this is only for a test. deletete it later and uncomment upper line
  const user = decodeUserToken(mockTokenTest); 
  console.log(user);
  
  return (
    <ThemeProvider theme={spotUSTheme}>
      <AppWrapper>
        <Navbar />
        <ContentWrapper>
          <AppRouter userData={user} />
        </ContentWrapper>
      </AppWrapper>
    </ThemeProvider>
  );
};

export default App;
