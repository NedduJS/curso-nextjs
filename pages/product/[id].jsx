import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

const ProductItem = () => {
  const router = useRouter();
  const product = router.query.id;

  return (
    <div>
      <div></div>
    </div>
  );
};

export default ProductItem;
