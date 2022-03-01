import React, { useEffect } from 'react';
import Image from '../components/Image';
import { imageData } from '../assets/images/imageData';

function Gallery() {
  return (
    <section>
      <h2>Gallery</h2>
      <p>Images, audio, and video of our performances</p>

      <div className='gallery-box'>
        {imageData.map(
          (image, index) =>
            image.id && <Image image={image} index={image.id} key={index + 1} />
        )}
      </div>
    </section>
  );
}

export default Gallery;
