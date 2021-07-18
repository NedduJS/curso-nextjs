import React from 'react';

import Navbar from '@components/Navbar/Navbar';

const index = ({ children }) => {
  return (
    <div className='container'>
      <Navbar />
      {children}

      <style jsx>{`
        .container{
          background: salmon;
        }
      `}</style>
    </div>
  );
};

export default index;
