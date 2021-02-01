import { createContext } from 'react';

const UserContext = createContext({
  authenticated: false,
  user: 'anonim',
  image: 'https://i.pinimg.com/originals/c3/6c/30/c36c30accc811453cc3b70c56f7334fa.png',
  togglesAuthentication: () => { },
  setUserName: () => { },
  setImage: () => { },
});
UserContext.displayName = 'UserInfoContext';

export default UserContext;
