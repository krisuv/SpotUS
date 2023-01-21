import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Contact, MainPage, NotFound, Profile } from '../pages';

interface IPrivateRoutes {
  userData: any;
}

const PrivateRoutes = ({userData}: IPrivateRoutes) => {
  return (
    <Routes>
      <Route path='/' element={<MainPage userData={userData} />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};

export default PrivateRoutes;