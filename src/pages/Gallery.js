import React from 'react';
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
        <div className='video'>
          <iframe
            // className='video'
            src='https://www.youtube.com/embed/lUhTArdldZc'
            title='Brass Knuckles - Three Susato Dances #1'
            frameBorder='0'
            allowFullScreen
          />
        </div>

        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry>
            {imageData.map(
              (image, index) =>
                image.id && (
                  <div className='image' key={index}>
                    <img
                      loading='lazy'
                      // className='image'
                      src={require(`../assets/images/${index + 1}.jpg`)}
                      description={image.description}
                      alt=''
                    />
                  </div>
                )
            )}
          </Masonry>
        </ResponsiveMasonry>
      </section>
    </div>
  );
}

export default Gallery;
