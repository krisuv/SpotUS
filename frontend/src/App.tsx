import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppWrapper } from './App.styles';
import Navbar from './components/Navbar/Navbar';
import { ThemeProvider } from '@mui/system';
import { spotUSTheme } from '../public';
import React from 'react';

import { MainPage, Profile, Contact } from './pages';


function App() {

  return (
    <ThemeProvider theme={spotUSTheme}>
      <Navbar />
      <AppWrapper>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
