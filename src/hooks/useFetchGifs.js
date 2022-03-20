import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
  const [obj, setObj] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGifs(category).then((item) =>
      setObj({
        data: item,
        loading: false,
      })
    );
  }, [category]);

  return obj;
};
