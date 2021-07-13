/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import { useState, createContext } from 'react';

export const UserContext = createContext({});

function UserProvider({ children }) {
  const [filter, setFilter] = useState('');
  return (
    <UserContext.Provider value={{ filter, setFilter }}>
      { children }
    </UserContext.Provider>
  );
}

export default UserProvider;
