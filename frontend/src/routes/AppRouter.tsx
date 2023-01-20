import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { NotFound } from '../pages';
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';

interface IAppRouter {
  userData: any;
}

const AppRouter = ({ userData }: IAppRouter) => {
  console.log('user data in App Router: ' + userData);
  const isUserAuthenticated = Boolean(userData);
  return (
    <Routes>
      {
        isUserAuthenticated
          ? <Route path='/*' element={<PrivateRoutes userData={userData}/>} />
          : <Route path='/*' element={<PublicRoutes />} />
      }
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;