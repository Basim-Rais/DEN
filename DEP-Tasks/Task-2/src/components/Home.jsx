import React, { useRef, useState } from 'react';
import img1 from '../images/image-1.jpg';
import img2 from '../images/img-2.jpg';
import img3 from '../images/image-3.jpg';
import '../index.css';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };


  const closeModal = () => {
    setIsOpen(false);
  };

  const imagesConRef = useRef(null);
  const images = [img1, img2, img3];

  const next = () => {
    if (imagesConRef.current) {
      const scrollLeft = imagesConRef.current.scrollLeft;
      const totalScrollWidth = imagesConRef.current.scrollWidth;
      const containerWidth = imagesConRef.current.clientWidth;


      if (scrollLeft + containerWidth >= totalScrollWidth) {
        imagesConRef.current.scrollTo({
          left: 0,
          behavior: 'smooth',
        });
      } else {

        imagesConRef.current.scrollBy({
          left: window.innerWidth,
          behavior: 'smooth',
        });
      }
    }
  };

  const prev = () => {
    if (imagesConRef.current) {
      const scrollLeft = imagesConRef.current.scrollLeft;
      const containerWidth = imagesConRef.current.clientWidth;


      if (scrollLeft <= 0) {
        imagesConRef.current.scrollTo({
          left: imagesConRef.current.scrollWidth,
          behavior: 'smooth',
        });
      } else {

        imagesConRef.current.scrollBy({
          left: -window.innerWidth,
          behavior: 'smooth',
        });
      }
    }
  };




  return (

    <div className="w-full h-screen flex justify-center items-center">
      <div className="relative w-full h-full flex justify-between items-center">
        {/* Left Arrow */}
        <div
          onClick={prev}
          className="absolute left-5 text-white h-12 w-12 cursor-pointer flex justify-center items-center bg-black bg-opacity-50 rounded-full z-10 transition hover:scale-125"
        >
          {'<'}
        </div>

        {/* Image Slider */}

        <div className="w-full h-full overflow-hidden" ref={imagesConRef}>
          <div className="flex w-full h-full">

            {images.map((image, index) => (

              <img
                key={index}
                className="min-w-full h-full object-cover"
                src={image}
                alt={`Image ${index + 1}`}
              />


            ))}

            <div className='absolute w-full top-[20%] lg:top-[35%] p-4 md:p-8  text-gray-300 '>
              <h1 className='text-4xl md:text-6xl font-bold text-gray-300 capitalize'>The movie</h1>
              <div className='mt-8 mb-4'>
                <button
                  onClick={openModal}
                  className='capitalize border bg-gray-300 text-black py-2 px-5 rounded'>
                  play
                </button>

                {isOpen && (
                  <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
                    <div className='bg-white p-8 rounded-lg shadow-lg max-w-md w-full'>
                      <h2 className='text-2xl font-bold mb-4 text-black'>Play later</h2>
                      <p className='mb-6 text-black'>
                        This feature added soon in the app
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
                  className='capitalize border text-white py-2 px-5 ml-4 bg-transparent hover:bg-red-600 hover:border-red-600 transition duration-300 rounded'>
                  watch later
                </button>

                {isOpen && (
                  <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
                    <div className='bg-white p-8 rounded-lg shadow-lg max-w-md w-full'>
                      <h2 className='text-2xl font-bold mb-4 text-black'>Watch later</h2>
                      <p className='mb-6 text-black'>
                        This feature added soon in the app
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
              <p className='w-full md:max-w-[70%] lg:max-w-[50%]xl:max-w-[35%] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, ipsam et, dignissimos totam voluptate nulla ratione aut nesciunt labore error minus voluptatibus maxime! Ratione debitis, quia mollitia laudantium beatae eius.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis possimus illo fuga ipsam incidunt dicta, aspernatur ut, vero rerum perferendis vitae architecto sunt consectetur sed minima, voluptatibus sapiente magnam voluptatum.</p>
            </div>
          </div>
        </div>

        {/* Right Arrow */}
        <div
          onClick={next}
          className="absolute right-5 text-white h-12 w-12 cursor-pointer flex justify-center items-center bg-black bg-opacity-50 rounded-full z-10 transition hover:scale-125"
        >
          {'>'}
        </div>
      </div>
    </div>
  );
};

export default Home;
