import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Contact, MainPage, Profile } from '../pages';

interface IPrivateRoutes {
  userData: any;
}

const PrivateRoutes = ({userData}: IPrivateRoutes) => {
  return (
    <Routes>
      <Route path='/' element={<MainPage userData={userData} />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
  );
};

export default PrivateRoutes;