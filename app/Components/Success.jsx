import Image from 'next/image'
import React from 'react'

const Success = () => {
  return (
    <section className=' py-28'>
        <div className="container text-center">
        <h2 className=' text-4xl font-bold mb-24'>شركاء النجاح</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-10 lg:gap-y-0 items-center mb-24">
        <div className="logos flex flex-col items-center justify-between h-full">
            <div className="image mb-4">
                <Image src='/success 1.png' alt='success-logo1' width={100} height={100} />
            </div>
            <h3 className=' font-bold text-3xl text-gray-500'>لوريم إيبسوم</h3>
        </div>
        <div className="logos flex flex-col items-center justify-between h-full">
            <div className="image mb-4">
                <Image src='/success 2.png' alt='success-logo1' width={100} height={100} />
            </div>
            <h3 className=' font-bold text-3xl text-gray-500'>لوريم إيبسوم</h3>
        </div>
        <div className="logos flex flex-col items-center justify-between h-full">
            <div className="image mb-4">
                <Image src='/success 3.png' alt='success-logo1' width={100} height={100} />
            </div>
            <h3 className=' font-bold text-3xl text-gray-500'>لوريم إيبسوم</h3>
        </div>
        <div className="logos flex flex-col items-center justify-between h-full">
            <div className="image mb-4">
                <Image src='/success 4.png' alt='success-logo1' width={70} height={100} />
            </div>
            <h3 className=' font-bold text-3xl text-gray-500'>لوريم إيبسوم</h3>
        </div>
        </div>
        <button className="bg-red-500 hover:bg-red-700 duration-500 text-lg text-white font-bold py-2 px-16 rounded-lg">
            رؤية المزيد
          </button>
        </div>
    </section>
  )
}

export default Success