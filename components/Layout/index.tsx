import React from 'react';

import Navbar from '@components/Navbar/Navbar';
import Footer from '@components/Footer';

const index = ({ children }) => {
  return (
    <div className='container'>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default index;
