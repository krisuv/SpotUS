import React, {useContext} from 'react';
import { Route, Routes } from 'react-router-dom';
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';
import {UserContext} from '../context';

const AppRouter = () => {
  const { userToken } = useContext(UserContext);
  console.log('user data in App Router: ' + userToken);
  const isUserAuthenticated = Boolean(userToken);
  return (
    <Routes>
      {
        isUserAuthenticated
          ? <Route path='/*' element={<PrivateRoutes />} />
          : <Route path='/*' element={<PublicRoutes />} />
      }
    </Routes>
  );
};

export default AppRouter;