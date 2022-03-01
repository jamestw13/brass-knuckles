import React, { useEffect } from 'react';

function Image({ image, index }) {
  const { id, description } = image;

  return (
    <div className='image-container'>
      <img
        className='image'
        src={require(`../assets/images/${index}.jpg`)}
        description={description}
      />
    </div>
  );
}

export default Image;
