import {createContext} from 'react';
import {IUserContext} from './UserContext.types';

const UserContext = createContext<IUserContext>({
    userToken: null,
    setUserToken: (auth: any) => {}
});

export default UserContext;