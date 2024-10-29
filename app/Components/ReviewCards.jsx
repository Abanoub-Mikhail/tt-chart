import Image from 'next/image'
import React from 'react'

const ReviewCards = ({img , desc}) => {
  return (
    <div className='card border-2 border-gray-300 rounded-xl py-4 px-4 flex flex-col-reverse xl:flex-row items-center justify-center min-w-[300px] lg:gap-x-8 bg-white'>
        <div className="text xl:w-[65%] text-right mt-5 lg:mt-0">
            <div className=' text-lg text-gray-500 mb-3'>{desc}</div>
            <div className="rate">
                <h2 className=' font-bold'>محمود سعد</h2>
                <p className=' font-bold'>4.5  <span className=' text-yellow-400'><i className="fa-solid fa-star"></i></span></p>
            </div>
        </div>
        <div className="img xl:w-36 h-36 w-full xl:h-36 overflow-hidden rounded-md relative mb-4 xl:mb-0">
            <Image src={img} alt="course-1" className='object-cover object-center w-full h-full' fill  />
        </div>
    </div>
  )
}

export default ReviewCards