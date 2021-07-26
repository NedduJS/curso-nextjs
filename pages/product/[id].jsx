import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { connect } from 'react-redux';

const ProductItem = ({ avoList }) => {
  const router = useRouter();
  const productID = router.query.id;
  const newProduct = avoList.find((item) => item.id === productID);

  return (
    <div>
      <div>
        <Image src={newProduct.image} width='300' height='300' />
      </div>
    </div>
  );
};

const mapStateToProps = ({ avo }) => {
  return {
    avoList: avo.avoList,
  };
};

export default connect(mapStateToProps, null)(ProductItem);
