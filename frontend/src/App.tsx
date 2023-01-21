import React, {useEffect, useRef, useState} from 'react';
import { AppWrapper, ContentWrapper } from './App.styles';
import Navbar from './components/Navbar/Navbar';
import { ThemeProvider } from '@mui/system';
import { spotUSTheme } from '../public';
import { AppRouter } from './routes';
import { decodeUserToken } from './utils';
import { UserContext } from './context';

const mockTokenTest = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

const App = () => {
  const [userToken, setUserToken] = useState(localStorage.getItem('user'));
  console.log('%c Logged user: ', 'color: #3fd4ee', userToken);

  // we will use this
  const user = userToken ? decodeUserToken(userToken) : null;

  // this is only for a test. deletete it later and uncomment upper line
  // const user = decodeUserToken(mockTokenTest);
  console.log(user);
  
  return (
    <ThemeProvider theme={spotUSTheme}>
        <UserContext.Provider value={{userToken, setUserToken}}>
          <AppWrapper>
            <Navbar userData={user} />
            <ContentWrapper>
              <AppRouter userData={user} />
            </ContentWrapper>
          </AppWrapper>
        </UserContext.Provider>
    </ThemeProvider>
  );
};

export default App;
