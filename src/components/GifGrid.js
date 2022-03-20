import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import GridItem from './GridItem';

export const GifGrid = ({ category }) => {
  const { loading, data } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {loading ? (
        <h1 className='animate__animated animate__fadeIn'>Cargando...</h1>
      ) : (
        <div className='grid'>
          {data?.map((image) => (
            <GridItem key={image.id} {...image} />
          ))}
        </div>
      )}
    </>
  );
};
