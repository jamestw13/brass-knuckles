import React from 'react';

function Image({ image, index }) {
  const { id, description } = image;

  return (
    <div className="image-container" id={id} tabIndex="0">
      <img className="image" src={require(`../assets/images/${index}.jpg`)} description={description} alt="" />
    </div>
  );
}

export default Image;
