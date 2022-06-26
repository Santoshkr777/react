import React, { useState } from 'react';

import Login from './LoginComponent/Login';

import DashBoardC from './DashBoard/DashBoardC';

const App = () => {
  const [status, setStatus] = useState('invalid');

  const getStatus = (currentStatus) => {
    setStatus(currentStatus);
  };

  return status === 'invalid' ? (
    <Login getStatus={getStatus} />
  ) : (
    <DashBoardC getStatus={getStatus} />
  );
};

export default App;
