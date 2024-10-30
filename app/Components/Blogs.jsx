import React from 'react'
import BlogsCard from './BlogsCard';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const Blogs = async () => {
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
        <div className="container relative overflow-x-auto text-center">
        <h2 className=' text-center text-4xl font-bold mb-10'>المدونات</h2>
            {/* <div className=" flex overflow-scroll no-scroll-bar py-2 gap-x-6 md:px-24 md:gap-x-7 mb-10 ">
            <BlogsCard title={second.title} image={second.image} desc={second.description}/>
            <BlogsCard title={last.title} image={last.image} desc={second.description}/>
            <BlogsCard title={third.title} image={third.image} desc={second.description}/>
            </div>
            <div className="left-arrow absolute right-2 top-1/2 border-2 rounded-lg font-bold text-xl border-black px-2 py-1">
                <i className="fa-solid fa-right-long"></i>
            </div>
            <div className="left-arrow absolute left-2 top-1/2 border-2 rounded-lg font-bold text-xl border-black px-2 py-1">
                <i className="fa-solid fa-left-long"></i>
            </div> */}
                          <div className="carousel px-9 mb-10">
              <Carousel>
  <CarouselContent>
    <CarouselItem className="md:basis-1/2 lg:basis-1/3 mb-2"><BlogsCard title={second.title} image={second.image} desc={second.description}/></CarouselItem>
    <CarouselItem className="md:basis-1/2 lg:basis-1/3 mb-2"><BlogsCard title={last.title} image={last.image} desc={second.description}/></CarouselItem>
    <CarouselItem className="md:basis-1/2 lg:basis-1/3 mb-2"><BlogsCard title={third.title} image={third.image} desc={second.description}/></CarouselItem>
    <CarouselItem className="md:basis-1/2 lg:basis-1/3 mb-2"><BlogsCard title={third.title} image={third.image} desc={second.description}/></CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
      <CarouselNext />

</Carousel>
              </div>
            <button className="bg-red-500 hover:bg-red-700 duration-500 text-lg text-white font-bold py-2 px-16 rounded-lg">
            رؤية المزيد
          </button>
        </div>
    </section>
  )
}

export default Blogs