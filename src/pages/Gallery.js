import React from 'react';
import Image from '../components/Image';
import { imageData } from '../assets/images/imageData';

function Gallery() {
  return (
    <section className='grid'>
      <h1 className='page-header uppercase ff-sans-norm fs-600'>Gallery</h1>

      <section className='card gallery-box photo-grid'>
        {imageData.map(
          (image, index) =>
            image.id && <Image image={image} index={image.id} key={index + 1} />
        )}
      </section>
    </section>
  );
}

export default Gallery;
