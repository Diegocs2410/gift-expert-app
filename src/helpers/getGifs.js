export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=BRSkVPskp21FkGiWP9Cl8xKKLNPgI5Dm&q=${encodeURI(
    category
  )}&limit=10`;
  const res = await fetch(url);
  const { data } = await res.json();

  return data?.map(({ id, title, images }) => ({
    id,
    title,
    url: images.downsized_medium.url,
  }));
};
