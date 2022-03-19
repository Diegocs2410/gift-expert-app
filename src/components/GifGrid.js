import React from 'react';

export const GifGrid = ({ category }) => {
  const getGifs = async () => {
    const url =
      'https://api.giphy.com/v1/gifs/search?api_key=BRSkVPskp21FkGiWP9Cl8xKKLNPgI5Dm&q=Ricky+and+morty&limit=10';
    const res = await fetch(url);
    const { data } = await res.json();

    const gifs = data?.map(({ id, title, images }) => {
      return {
        id,
        title,
        url: images.downsized_medium.url,
      };
    });

    console.log('gifs :>> ', gifs);
  };
  getGifs();
  return (
    <div>
      <h3>{category}</h3>
    </div>
  );
};
