import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GiftExpertApp = () => {
  // const categories = ['Naruto', 'One Punch', 'Dragon Ball'];
  const [categories, setCategories] = useState(['Naruto']);
  

  return (
    <>
      <h2>GiftExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      {categories?.map((cat) => (
        <GifGrid key={cat} category={cat} />
      ))}
    </>
  );
};

export default GiftExpertApp;
