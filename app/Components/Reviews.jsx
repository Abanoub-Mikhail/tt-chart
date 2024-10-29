import React from 'react'
import ReviewCards from './ReviewCards'

const Reviews = () => {
  return (
    <section className=' py-28 bg-gray-100 '>
        <div className="container relative">
            <h2 className=' text-center text-4xl font-bold mb-10'>أراء العملاء</h2>
            <div className="flex overflow-scroll no-scroll-bar py-2 gap-x-6 md:px-24 md:gap-x-7 ">
            <ReviewCards img='/review.png' price={44} desc={'الدورة تستهدف المبتدئين والباحثين عن الإحتراف في مجال التحليل الفنى وجميع المهتمين بأسواق المال العربية والأجنبية.'}/>
            <ReviewCards img='/review.png' price={44} desc={'الدورة تستهدف المبتدئين والباحثين عن الإحتراف في مجال التحليل الفنى وجميع المهتمين بأسواق المال العربية والأجنبية.'}/>
            </div>
            <div className="left-arrow absolute right-2 top-1/2 border-2 rounded-lg font-bold text-xl border-black px-2 py-1">
                <i className="fa-solid fa-right-long"></i>
            </div>
            <div className="left-arrow absolute left-2 top-1/2 border-2 rounded-lg font-bold text-xl border-black px-2 py-1">
                <i className="fa-solid fa-left-long"></i>
            </div>
        </div>
    </section>
  )
}

export default Reviews