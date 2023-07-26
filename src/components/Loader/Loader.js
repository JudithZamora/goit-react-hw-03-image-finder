import React from 'react';
import LoaderSpinner from 'react-loader-spinner';

const Loader = ({ visible }) => {
  return (
    <div className={`loader ${visible ? 'visible' : 'hidden'}`}>
      <LoaderSpinner type="TailSpin" color="#00BFFF" height={100} width={100} />
    </div>
  );
};

export default Loader;
