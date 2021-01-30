import { createContext } from 'react';

const UserContext = createContext({
    authenticated: false,
    togglesAuthentication: () => { },
})
UserContext.displayName = 'UserInfoContext';


export default UserContext;