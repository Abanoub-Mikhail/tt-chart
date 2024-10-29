import Image from 'next/image'
import React from 'react'

const AnalysisCard = ({title , image , desc}) => {

    return (
        <div className="bg-white border-2 rounded-xl p-4 relative text-right shadow-md min-w-[300px]">
          <Image src={image} alt={title} width={50} height={100} className="w-full h-64 object-cover rounded-xl mb-4" />
          <h2 className="text-2xl font-bold mb-2">دورة التحليل الفني الكلاسيكي</h2>
          <div className="text-gray-500 mb-5 text-base" dangerouslySetInnerHTML={{__html:desc}}></div>
          <button className="bg-red-500 hover:bg-red-700 duration-500 text-lg text-white font-bold py-2 px-6 rounded-lg">
            رؤية المزيد
          </button>
        </div>
      );
}

export default AnalysisCard