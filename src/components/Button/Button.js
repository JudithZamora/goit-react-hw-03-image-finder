import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick, disabled }) => {
  return (
    <button type="button" onClick={onClick} disabled={disabled}>
      Load more
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default Button;
