import React from 'react'

const Watch = () => {
  return (
    
    <div>



      <div className='flex flex-wrap justify-evenly items-center lg:py-20 md:py-20 bg-black py-10 px-5'>
        {/* left */}
        <div className='left mb-10 lg:mb-0 md:mb-0 sm:mb-0'>
            <h2 className='text-white lg:text-5xl md:text-5xl mb-5 font-bold lg:text-start md:text-start sm:text-start text-center text-3xl'>Watch everywhere</h2>
            <p className='text-white lg:text-2xl md:text-2xl text-center text-lg lg:text-start md:text-start sm:text-start'>Stream unlimited movies and TV shows on your <br className='hidden lg:block md:block sm:block' />  phone, tablet, laptop and TV.</p>
        </div>

        {/* right */}
        <div className='right'>
            <video
            className='lg:w-[35em] md:w-[35em] w-[30em]'
             src="/video/v3.mp4"
              type="video/mp4"
              controls
              autoPlay={true}
              muted
              ></video>
        </div>
      </div>

      <div className='bg-gray-500 h-2.5'>

      </div>
    </div>
  )
}

export default Watch;
