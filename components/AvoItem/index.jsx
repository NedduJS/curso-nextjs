import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import styles from './AvoItem.module.css';

const AvoItem = ({ id, image, name, price }) => {
  return (
    <div className={styles.AvoItem}>
      <Link href={`/product/${id}`}>
        <a>
          <Image src={image} width='300' height='300' />
          <p className={styles.name}>{name}</p>
          <p className={styles.price}>{price}</p>
        </a>
      </Link>
    </div>
  );
};

export default AvoItem;
