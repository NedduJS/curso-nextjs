import React from 'react';

import Navbar from '@components/Navbar/Navbar';

const index = ({ children }) => {
  return (
    <div className='container'>
      <Navbar />
      {children}
    </div>
  );
};

export default index;
