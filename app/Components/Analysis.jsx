import React from 'react'
import AnalysisCard from './AnalysisCard'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const Analysis = async() => {


        //GET COURSES
        async function getCourses() {
            const res = await fetch('https://www.ttchart.com/public/api/courses');
            const data = await res.json();
            return data
          }
          let data = await getCourses()
          let [second , last , third] = data.courses.slice(-3)
          


  return (
    <section className=' py-28'>
        <div className="container">
        <h2 className=' text-center text-4xl font-bold mb-10'>تحليلات</h2>
            <div className='carousel px-8'>
            <Carousel>
  <CarouselContent>
    <CarouselItem className="md:basis-1/2 lg:basis-1/3 mb-2"><AnalysisCard title={second.title} image={second.image} desc={second.description}/></CarouselItem>
    <CarouselItem className="md:basis-1/2 lg:basis-1/3 mb-2"><AnalysisCard title={last.title} image={last.image} desc={second.description}/></CarouselItem>
    <CarouselItem className="md:basis-1/2 lg:basis-1/3 mb-2"><AnalysisCard title={third.title} image={third.image} desc={second.description}/></CarouselItem>
    <CarouselItem className="md:basis-1/2 lg:basis-1/3 mb-2"><AnalysisCard title={third.title} image={third.image} desc={second.description}/></CarouselItem>
    <CarouselItem className="md:basis-1/2 lg:basis-1/3 mb-2"><AnalysisCard title={third.title} image={third.image} desc={second.description}/></CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
      <CarouselNext />

</Carousel>
            </div>
        </div>
    </section>
  )
}

export default Analysis