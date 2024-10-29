import Image from 'next/image'
import React from 'react'

const Manasa = () => {
  return (
    <div className='pt-48 flex flex-col-reverse md:flex-row flex-wrap items-center md:gap-y-6'>
            <div className="image w-full m-auto md:w-[38%]">
                <Image src='/photo.jpeg' alt='photo' className=' rounded-xl w-full h-full object-cover object-center' width={450} height={400}/>
            </div>
            <div className="text-right w-full ms-auto md:w-[50%] mb-5 md:mb-0">
                <h2 className=' font-bold text-5xl mb-6'>منصة المضاربة</h2>
                <p className=' text-lg text-gray-500 mb-6'>احد افضل المدربين في الشرق الأوسط في مجال التحليل الفني لاسواق المال المحلية والعالمية , وقد قام بنقل خبرته الممتده ل 20 سنة للمتدربين والمهتمين من خلال عقد الدورات التدريبية والندوات المتنوعة</p>
                <button className="bg-red-500 hover:bg-red-700 duration-500 text-lg text-white font-bold py-2 px-6 rounded-lg">رؤية المزيد</button>
            </div>
    </div>
  )
}

export default Manasa