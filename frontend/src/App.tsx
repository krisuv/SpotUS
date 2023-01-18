import React, { useRef } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppWrapper } from './App.styles';
import Navbar from './components/Navbar/Navbar';
import { ThemeProvider } from '@mui/system';
import { spotUSTheme } from '../public';

import { MainPage, Profile, Contact, Register, Login } from './pages';


const App = () => {
  const userData = useRef(sessionStorage.getItem('user'));
  console.log(userData);

  return (
    <ThemeProvider theme={spotUSTheme}>
      <Navbar />
      <AppWrapper>
        <Routes>
          <Route path='/' element={<MainPage userData={userData.current}/>} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </AppWrapper>
    </ThemeProvider>
  );
};

export default App;
