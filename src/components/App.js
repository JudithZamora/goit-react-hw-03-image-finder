import React, { useState, useEffect, useCallback } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import { fetchImages } from './api';

const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const [page, setPage] = useState(1);

  const fetchImagesFromAPI = useCallback(async () => {
    setIsLoading(true);
    const data = await fetchImages(query, page);
    setImages((prevImages) => [...prevImages, ...data]);
    setIsLoading(false);
  }, [query, page]);

  useEffect(() => {
    if (query) {
      fetchImagesFromAPI();
    }
  }, [query, fetchImagesFromAPI]);

  const handleSearchSubmit = (value) => {
    setQuery(value);
    setPage(1);
    setImages([]);
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
      {isLoading && <Loader />}
      {images.length > 0 && <Button onClick={handleLoadMore} disabled={isLoading} />}
      <Modal isOpen={modalImage !== null} onClose={handleCloseModal} src={modalImage} alt="Modal Image" />
    </div>
  );
};

export default App;
