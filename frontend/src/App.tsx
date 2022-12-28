import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppWrapper } from './App.styles';

import { MainPage, Profile, Contact } from './pages';


function App() {

  return (
    <AppWrapper>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </AppWrapper>
  )
}

export default App;
