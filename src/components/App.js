import React, { useState, useEffect } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';

const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (query) {
      fetchImages();
    }
  }, [query]);

  const fetchImages = () => {
    setIsLoading(true);
    const API_KEY = '38339557-524f2bcf27891a10b51d9cde6';
    const url = `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setImages((prevImages) => [...prevImages, ...data.hits]);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching images:', error);
        setIsLoading(false);
      });
  };

  const handleSearchSubmit = (value) => {
    setQuery(value);
    setPage(1); // Reset page to 1 when a new search is submitted
    setImages([]); // Clear the previous images when a new search is submitted
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleImageClick = (imageUrl) => {
    setModalImage(imageUrl);
  };

  const handleCloseModal = () => {
    setModalImage(null);
  };

  return (
    <div>
      <h1>Image Search</h1>
      <Searchbar onSubmit={handleSearchSubmit} />
      <ImageGallery>
        {images.map((image) => (
          <ImageGalleryItem
            key={image.id}
            src={image.webformatURL}
            alt={image.tags}
            onClick={() => handleImageClick(image.largeImageURL)}
          />
        ))}
      </ImageGallery>
      <Loader visible={isLoading} />
      {images.length > 0 && <Button onClick={handleLoadMore} disabled={isLoading} />}
      <Modal isOpen={modalImage !== null} onClose={handleCloseModal} src={modalImage} alt="Modal Image" />
    </div>
  );
};

export default App;
