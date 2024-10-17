import React from 'react'
import kids from "../images/kids.webp"


const CreateProfile = () => {
  return (
    
    <div>



      <div className='flex flex-wrap justify-evenly items-center lg:py-20 md:py-20 bg-black py-10 px-5'>
        {/* left */}
        <div className='left order-last lg:order-first md:order-first'>
            <img 
            src={kids}
             alt=""
             className='lg:w-[35em] md:w-[35em] w-[25em]' />
        </div>

        {/* right */}
        

        <div className='right mb-10 lg:mb-0 md:mb-0 sm:mb-0'>
            <h2 className='text-white lg:text-5xl md:text-5xl mb-5 font-bold lg:text-start md:text-start sm:text-start text-center text-3xl'>Create profiles for kids</h2>
            <p className='text-white lg:text-2xl md:text-2xl text-center text-lg lg:text-start md:text-start sm:text-start'>Send children on adventures with their favourite <br className='hidden lg:block md:block sm:block' /> characters in a space made just for them-free <br className='hidden lg:block md:block sm:block' />with your membership</p>
        </div>
      </div>

      <div className='bg-gray-500 h-2.5'>

      </div>
    </div>
  )
}

export default CreateProfile;
