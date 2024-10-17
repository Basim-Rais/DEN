import React from 'react'

const Enjoy = () => {
  return (
    
    <div>



      <div className='flex flex-wrap justify-evenly items-center lg:py-20 md:py-20 bg-black py-10 px-5'>
        {/* left */}
        <div className='left order-last lg:order-first md:order-first'>
            <video
            className='lg:w-[20em] md:w-[20em] w-[20em]'
             src="/video/v2.mp4"
              type="video/mp4"
              controls
              autoPlay={true}
              muted
              ></video>
        </div>

        {/* right */}
        

        <div className='right mb-10 lg:mb-0 md:mb-0 sm:mb-0'>
            <h2 className='text-white lg:text-5xl md:text-5xl mb-5 font-bold lg:text-start md:text-start sm:text-start text-center text-3xl'>Download your shows <br /> to watch offline</h2>
            <p className='text-white lg:text-2xl md:text-2xl text-center text-lg lg:text-start md:text-start sm:text-start'>see your favourites easily and always have <br className='hidden lg:block md:block sm:block' />  something to watch</p>
        </div>
      </div>

      <div className='bg-gray-500 h-2.5'>

      </div>
    </div>
  )
}

export default Enjoy;
