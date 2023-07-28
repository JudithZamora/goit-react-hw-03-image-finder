import React from 'react';
import { Hearts } from 'react-loader-spinner';

const Loader = ({ visible }) => {
  return (
    <div className={`loader ${visible ? 'visible' : 'hidden'}`}>
      
      <Hearts type="TailSpin" color="#40332" height={100} width={80} />
    </div>
  );
};

export default Loader;

