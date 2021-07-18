import React,{useState,useEffect} from 'react';

import Navbar from '@components/Navbar/Navbar';

const Home = () => {
  const [productList, setProductList] = useState<TProduct[]>([])
  
  useEffect(() => {
    fetch('/api/avo')
      .then(response => response.json())
      .then(({ data, length }) => {
        setProductList(data)
      })
  }, [])
  
  return (
    <div>
      <Navbar />
      <h1>Hello NextJS</h1>
      {productList.map(product => {
        return <div key={product.id}>{ product.name}</div>
      })}
    </div>
  );
};

export default Home;
