import React from 'react';
import { Route, Routes } from 'react-router-dom';
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
    </Routes>
  );
};

export default AppRouter;