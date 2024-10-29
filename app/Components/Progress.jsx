import Image from 'next/image'
import React from 'react'

const Progress = () => {
  return (
    <section className=' py-28'>
        <div className="container text-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-10 lg:gap-y-0 items-center">
        <div className="logos flex flex-col items-center justify-between h-full">
            <div className="image mb-9">
                <Image src='/prog1.png' alt='prog-logo1' width={180} height={180} />
            </div>
            <h2 className=' font-bold text-4xl'>1568</h2>
            <h3 className=' text-xl'>متدرب</h3>
        </div>
        <div className="logos flex flex-col items-center justify-between h-full">
            <div className="image mb-9">
                <Image src='/prog2.png' alt='prog-logo2' width={180} height={180} />
            </div>
            <h2 className=' font-bold text-4xl'>10+</h2>
            <h3 className=' text-xl'>سنوات الخبرة</h3>
        </div>
        <div className="logos flex flex-col items-center justify-between h-full">
            <div className="image mb-9">
                <Image src='/prog3.png' alt='prog-logo3' width={180} height={180} />
            </div>
            <h2 className=' font-bold text-4xl'>95%</h2>
            <h3 className=' text-xl'>نسبة رضا العملاء</h3>
        </div>
        <div className="logos flex flex-col items-center justify-between h-full">
            <div className="image mb-9">
                <Image src='/prog4.png' alt='prog-logo4' width={180} height={180} />
            </div>
            <h2 className=' font-bold text-4xl'>2</h2>
            <h3 className=' text-xl'>الدورات</h3>
        </div>
        </div>
        </div>
    </section>
  )
}

export default Progress