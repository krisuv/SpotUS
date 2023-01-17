import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppWrapper } from './App.styles';
import Navbar from './components/Navbar/Navbar';
import { ThemeProvider } from '@mui/system';
import { spotUSTheme } from '../public';

import { MainPage, Profile, Contact, Register, Login } from './pages';


function App() {

  return (
    <ThemeProvider theme={spotUSTheme}>
      <Navbar />
      <AppWrapper>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
