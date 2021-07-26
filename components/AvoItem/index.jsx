import React from 'react';
import Image from 'next/image';

const AvoItem = ({ image, name, price }) => {
  return (
    <div className=''>
      <Image src={image} width='300' height='300' />
      <p>{name}</p>
      <p>{price}</p>
    </div>
  );
};

export default AvoItem;
