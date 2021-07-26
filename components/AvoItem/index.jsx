import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const AvoItem = ({ id, image, name, price }) => {
  return (
    <div className=''>
      <Link href={`/product/${id}`}>
        <a>
          <Image src={image} width='300' height='300' />
          <p>{name}</p>
          <p>{price}</p>
        </a>
      </Link>
    </div>
  );
};

export default AvoItem;
