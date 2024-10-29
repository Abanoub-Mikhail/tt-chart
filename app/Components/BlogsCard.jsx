import Image from 'next/image';
import React from 'react'

const BlogsCard = ({title , image , desc}) => {
  return (
    <div className="bg-white border-2 rounded-xl p-4 relative text-right shadow-md min-w-[300px]">
    <Image src={image} alt={title} width={50} height={100} className="w-full h-64 object-cover rounded-xl mb-4" />
    <h2 className="text-2xl font-bold mb-2">دورة التحليل الفني الكلاسيكي</h2>
    <div className="text-gray-500 mb-5 text-base" dangerouslySetInnerHTML={{__html:desc}}></div>
    <div className="profile flex items-center justify-end">
        <div className="ifo me-3 text-sm">
            <h3 className=' font-bold'>محمود سعد</h3>
            <p className=' text-gray-500'>17 jan 2022</p>
        </div>
        <div className="image w-12 h-12 rounded-full overflow-hidden bg-green-400">
            <Image src='/avatar.png'alt='profile-image' width={40} height={40} className=' w-full h-full'/>
        </div>
    </div>
  </div>
); 
}

export default BlogsCard