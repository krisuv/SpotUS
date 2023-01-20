import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Login, MainPagePreview, Register } from '../pages';

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<MainPagePreview />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  );
};

export default PublicRoutes;