import React from 'react';
// import { Link } from 'react-router-dom';

function Contact() {
  return (
    <div className='page'>
      <h1 className='page-header ff-sans-cond fs-600'>Contact us</h1>
      <section className='card'>
        <form action='#' className='form'>
          <div className='form-item'>
            <input
              type='text'
              className='form-input'
              placeholder='Your name'
              aria-label='Your name'
            />
          </div>

          <div className='form-item'>
            <input
              type='email'
              className='form-input'
              placeholder='Your email'
              aria-label='Your email'
            />
          </div>

          <button className='form-button' type='submit'>
            Send
          </button>
        </form>
      </section>
    </div>
  );
}

export default Contact;
