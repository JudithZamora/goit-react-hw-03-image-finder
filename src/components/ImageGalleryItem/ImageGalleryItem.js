import React from 'react';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ src, alt }) => {
  return (
    <li className="gallery-item">
      <img src={src} alt={alt} />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
