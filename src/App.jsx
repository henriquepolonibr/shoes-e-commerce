import React, { useEffect } from 'react';
import Routes from './routes';

import UserProvider from './Contexts/filter';

export default function App() {
  useEffect(() => {
    document.title = 'React - Trustly';
  }, []);
  return (
    <UserProvider>
      <div>
        <Routes />
      </div>
    </UserProvider>
  );
}
