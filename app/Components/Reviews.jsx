import React from 'react'
import ReviewCards from './ReviewCards'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'

const Reviews = () => {
  return (
    <section className=' py-28 bg-gray-100 '>
        <div className="container">
            <h2 className=' text-center text-4xl font-bold mb-10'>أراء العملاء</h2>
              <div className="carousel px-9">
              <Carousel>
  <CarouselContent>
    <CarouselItem className="md:basis-1/2 mb-2"><ReviewCards img='/review.png' price={44} desc={'الدورة تستهدف المبتدئين والباحثين عن الإحتراف في مجال التحليل الفنى وجميع المهتمين بأسواق المال العربية والأجنبية.'}/></CarouselItem>
    <CarouselItem className="md:basis-1/2 mb-2"><ReviewCards img='/review.png' price={44} desc={'الدورة تستهدف المبتدئين والباحثين عن الإحتراف في مجال التحليل الفنى وجميع المهتمين بأسواق المال العربية والأجنبية.'}/></CarouselItem>
    <CarouselItem className="md:basis-1/2 mb-2"><ReviewCards img='/review.png' price={44} desc={'الدورة تستهدف المبتدئين والباحثين عن الإحتراف في مجال التحليل الفنى وجميع المهتمين بأسواق المال العربية والأجنبية.'}/></CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
      <CarouselNext />

</Carousel>
              </div>
        </div>
    </section>
  )
}

export default Reviews