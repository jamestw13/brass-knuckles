import React from 'react';
import Image from '../components/Image';
import { imageData } from '../assets/images/imageData';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

function Gallery() {
  const images = [];
  for (let i = 0; i < 20; i++) {
    const randomNumber = Math.floor(Math.random() * imageData.length);
    images.push(imageData[randomNumber]);
  }
  return (
    <div className='page'>
      <h1 className='page-header uppercase ff-sans-norm fs-600'>Gallery</h1>

      <section className='card'>
        <iframe
          className='video'
          src='https://www.youtube.com/embed/lUhTArdldZc?controls=0'
          title='Brass Knuckles - Three Susato Dances #1'
          frameborder='0'
          allowfullscreen
        />

        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter={5}>
            {imageData.map(
              (image, index) =>
                image.id && (
                  <img
                    loading='lazy'
                    className='image'
                    src={require(`../assets/images/${index + 1}.jpg`)}
                    description={image.description}
                    alt=''
                  />
                )
            )}
          </Masonry>
        </ResponsiveMasonry>
      </section>
    </div>
  );
}

export default Gallery;
