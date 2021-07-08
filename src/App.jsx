import React, { useEffect } from 'react';
import Routes from './routes';

export default function App() {
  useEffect(() => {
    document.title = 'React - Trustly';
  }, []);
  return (
    <div>
      <Routes />
    </div>
  );
}
