import React, {useEffect, useRef, useState} from 'react';
import { AppWrapper, ContentWrapper } from './App.styles';
import Navbar from './components/Navbar/Navbar';
import { ThemeProvider } from '@mui/system';
import { spotUSTheme } from '../public';
import { AppRouter } from './routes';
import { decodeUserToken } from './utils';
import { UserContext } from './context';

const App = () => {
  const [userToken, setUserToken] = useState(localStorage.getItem('user'));
  console.log('%c Logged user: ', 'color: #3fd4ee', userToken);

  const user = userToken ? decodeUserToken(userToken) : null;
  console.log(user);
  
  return (
    <ThemeProvider theme={spotUSTheme}>
        <UserContext.Provider value={{userToken, setUserToken}}>
          <AppWrapper>
            <Navbar />
            <ContentWrapper>
              <AppRouter />
            </ContentWrapper>
          </AppWrapper>
        </UserContext.Provider>
    </ThemeProvider>
  );
};

export default App;
