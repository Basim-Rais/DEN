import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className='mx-auto max-w-6xl lg:py-20 md:py-20 py-10 px-5'>
        <p className='text-gray-300 mb-5'>
            Questions ? Call <span className='underline'>000-800-919-1694</span>
        </p>

        <div className="main text-gray-300 flex justify-between mb-4 cursor-pointer">
            <div className="one">
                <ul className='underline'>
                    <li className='mb-3'>FAQ</li>
                    <li className='mb-3'>Investor Relation</li>
                    <li className='mb-3'>Privacy</li>
                    <li>Speed Test</li>
                </ul>
            </div>
             
             <div className="two">
             <ul className='underline'>
                    <li className='mb-3'>FAQ</li>
                    <li className='mb-3'>Investor Relation</li>
                    <li className='mb-3'>Privacy</li>
                    <li>Speed Test</li>
                </ul>
             </div>

             <div className="three">
             <ul className='underline'>
                    <li className='mb-3'>FAQ</li>
                    <li className='mb-3'>Investor Relation</li>
                    <li className='mb-3'>Privacy</li>
                    <li>Speed Test</li>
                </ul>
             </div>

             <div className="four">
             <ul className='underline'>
                    <li className='mb-3'>FAQ</li>
                    <li className='mb-3'>Investor Relation</li>
                    <li className='mb-3'>Privacy</li>
                    <li>Speed Test</li>
                </ul>
             </div>
        </div>

        <p className='text-gray-300 font-bold pt-10 lg:text-center md:text-center text-center'>Netflix Pakistan</p>

        <p className='pt-5 text-white lg:text-center md:text-center text-center text-lg'>Created with <i className="fa-solid fa-heart text-red-600 text-lg"></i> by<span className='font-bold'> Basim Khan</span></p>
      </div>
    </div>
  )
}

export default Footer;
