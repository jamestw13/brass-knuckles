import React from 'react';
import { imageData } from '../assets/gallery-images/imageData';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

function Gallery() {
  return (
    <div className='page'>
      <h1 className='page-header uppercase ff-sans-norm fs-600'>Gallery</h1>

      <section className='card'>
        <div className='video'>
          <iframe
            src='https://www.youtube.com/embed/lUhTArdldZc'
            title='Brass Knuckles - Three Susato Dances #1'
            frameBorder='0'
            allowFullScreen
          />
          <iframe
            src='https://www.youtube.com/embed/H47VILKLfJI?start=4261'
            title='Brass Knuckles - Amazing Grace'
            frameborder='0'
            allowfullscreen
          ></iframe>
        </div>

        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry>
            {imageData.map(
              (image, index) =>
                image.id && (
                  <div className='image' key={index}>
                    <img
                      loading='lazy'
                      src={require(`../assets/gallery-images/${index + 1}.jpg`)}
                      alt={image.description}
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
