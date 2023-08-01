// api.js
const API_KEY = '38339557-524f2bcf27891a10b51d9cde6';

const fetchImages = async (query, page) => {
  const url = `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.hits;
  } catch (error) {
    console.error('Error fetching images:', error);
    return [];
  }
};

export { fetchImages };
