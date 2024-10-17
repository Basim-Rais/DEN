import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };


  const closeModal = () => {
    setIsOpen(false);
  };
  

  return (
    <div className='absolute w-full p-4 flex items-center bg-transparent justify-between z-50'>
      <h1 className='lg:text-5xl md:text-5xl text-red-600 uppercase cursor-pointer font-bold text-3xl'>Netflix</h1>

      <div className='flex flex-wrap items-center'>
        <button
          onClick={openModal}
          className='capitalize text-white pr-4 mb-2 md:mb-0 border py-2 px-4 rounded border-gray-300 mr-2 hover:bg-black hover:border-black transition duration-300 mt-2 lg:mt-0 md:mt-0 '
        >Login</button>

        {isOpen && (
          <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
            <div className='bg-white p-8 rounded-lg shadow-lg max-w-md w-full'>
              <h2 className='text-2xl font-bold mb-4'>Login</h2>
              <p className='mb-6'>
                Login page is added soon in the app.
              </p>
              <button
                onClick={closeModal}
                className='px-4 py-2 bg-red-600 text-white rounded capitalize'>
                Close
              </button>
            </div>
          </div>
        )}

        <button
          onClick={openModal}
          className='capitalize px-6 py-2 bg-red-600 cursor-pointer text-white rounded'>Sign up</button>

        {isOpen && (
          <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
            <div className='bg-white p-8 rounded-lg shadow-lg max-w-md w-full'>
              <h2 className='text-2xl font-bold mb-4'>Sign up</h2>
              <p className='mb-6'>
                Sign up page is added soon in the app.
              </p>
              <button
                onClick={closeModal}
                className='px-4 py-2 bg-red-600 text-white rounded capitalize'>
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
