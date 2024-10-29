import React from 'react'
import CoursesCard from './CoursesCard'

const Courses = async() => {

    //GET COURSES
    async function getCourses() {
      const res = await fetch('https://www.ttchart.com/public/api/courses');
      const data = await res.json();
      return data
    }
    let data = await getCourses()
    let [secont , last] = data.courses.slice(-2)
    


  return (
    <>
    <section className=' py-28 bg-gray-100'>
        <div className="container">
            <h2 className=' text-center text-4xl font-bold mb-10'>الدورات</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 md:gap-x-8">
            
            <CoursesCard img={secont.image} price={secont.price} desc={secont.description}/>
            <CoursesCard img={last.image} price={last.price} desc={secont.description}/>
            
            </div>
        </div>
    </section>
    </>
  )
}

export default Courses