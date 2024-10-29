import React from 'react'
import AccordingItem from './AccordingItem'

const Question = () => {
  return (
    <section className=" relative bg-cover bg-center bg-no-repeat min-h-[550px]" style={{ backgroundImage: `url('/bg.png')` }}>
        <div className="dark-bg absolute top-0 bottom-0 right-0 left-0 bg-black bg-opacity-40"></div>
        <div className="container relative z-40 py-28">
        <h2 className=' text-center text-4xl text-white font-bold mb-10'>لماذا تختار التدرب معنا؟</h2>
                <div className="accordion absolute left-2 right-2 ">
                 <AccordingItem/>
                </div>
        </div>
    </section>
  )
}

export default Question