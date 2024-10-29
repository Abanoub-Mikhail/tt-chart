import React from 'react'
import AnalysisCard from './AnalysisCard'

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
        <div className="container relative overflow-x-auto">
        <h2 className=' text-center text-4xl font-bold mb-10'>تحليلات</h2>
            <div className=" flex overflow-scroll no-scroll-bar py-2 gap-x-6 md:px-24 md:gap-x-7 ">
            <AnalysisCard title={second.title} image={second.image} desc={second.description}/>
            <AnalysisCard title={last.title} image={last.image} desc={second.description}/>
            <AnalysisCard title={third.title} image={third.image} desc={second.description}/>
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

export default Analysis