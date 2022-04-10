import React from 'react';
import Image from '../components/Image';
import { imageData } from '../assets/images/imageData';

function Gallery() {
  const images = [];
  for (let i = 0; i < 20; i++) {
    const randomNumber = Math.floor(Math.random() * imageData.length);
    images.push(imageData[randomNumber]);
  }
  return (
    <section className="grid">
      <h1 className="page-header uppercase ff-sans-norm fs-600">Gallery</h1>

      <section className="card gallery-box">
        <div className="featured">
          <iframe
            className="video"
            src="https://www.youtube.com/embed/lUhTArdldZc?controls=0"
            title="Brass Knuckles - Three Susato Dances #1"
            frameborder="0"
            allowfullscreen
          />
        </div>
        {images.map((image, index) => image.id && <Image image={image} index={image.id} key={index + 1} />)}
      </section>
    </section>
  );
}

export default Gallery;
