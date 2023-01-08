import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppWrapper } from './App.styles';
import Navbar from './components/Navbar';
import { ThemeProvider } from '@mui/system';
import { spotUSTheme } from '../public';

import { MainPage, Profile, Contact } from './pages';


function App() {

  return (
    <ThemeProvider theme={spotUSTheme}>
      <AppWrapper>
        <Navbar />
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
