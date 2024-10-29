import Image from 'next/image'
import React from 'react'

const CoursesCard = ({img , price, desc}) => {
  return (
    <div className='card border-2 border-gray-300 rounded-xl py-4 px-4 flex flex-col-reverse xl:flex-row items-center justify-center lg:gap-x-5 bg-white'>
        <div className="text xl:w-1/2 text-right mt-5 lg:mt-0">
            <h3 className=' text-2xl font-bold mb-2'>دورة التحليل الفني الكلاسيكي</h3>
            <div className=' text-lg text-gray-500 mb-3' dangerouslySetInnerHTML={{__html:desc}}></div>
            <div className="pay-info flex items-center justify-between border-t-2 pt-5">
                <button className=' bg-red-600 px-7 py-3 rounded-md text-white w-1/2 hover:bg-red-800'>{price?<><i className="fa-solid fa-basket-shopping me-2"></i> شراء الأن</>:<span>مشاهدة</span>}</button>
                <div className="price text-center">
                    <h4 className=' font-bold text-2xl'>{price? price +' ريال' : 'مجانا'}</h4>
                    {price? <p className=' text-gray-500 text-sm'>شامل الضريبة</p> :''}
                </div>
            </div>
        </div>
        <div className="img xl:w-64 h-64 w-full xl:h-60 overflow-hidden rounded-md relative mb-4 xl:mb-0">
            <Image src={img} alt="course-1" className='object-cover object-top w-full h-full' fill  />
            <div className="rate absolute top-3 right-3">
                <p className=' font-bold'>4.5  <span className=' text-yellow-400'><i className="fa-solid fa-star"></i></span></p>
            </div>
        </div>
    </div>
  )
}
 
export default CoursesCard