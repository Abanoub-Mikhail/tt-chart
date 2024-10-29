import React from 'react'
import Subscribe from './Subscribe'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className='pt-28 pb-10 px-3'>
        <div className="container">
           <div className='grid gap-y-4 lg:gap-y-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-right mb-10'>
           <div className="subscribe">
                <Subscribe/>
            </div>
            <div className="support">
                <h2 className=' font-bold text-2xl mb-3'>الدعم</h2>
                <ul className=' text-gray-700'>
                    <li className='mb-1 text-lg'>
                        <Link href='#'>اتصل بنا</Link>
                    </li>
                    <li className='mb-1 text-lg'>
                        <Link href='#'>سياسة الخصوصية</Link>
                    </li>
                    <li className='mb-1 text-lg'>
                        <Link href='#'>تسجيل الدخول</Link>
                    </li>
                </ul>
            </div>
            <div className="About">
                <h2 className=' font-bold text-2xl mb-3'>عن الموقع</h2>
                <ul className=' text-gray-700'>
                    <li className='mb-1 text-lg'>
                        <Link href='#'>الرئيسية</Link>
                    </li>
                    <li className='mb-1 text-lg'>
                        <Link href='#'>الدورات</Link>
                    </li>
                    <li className='mb-1 text-lg'>
                        <Link href='#'>الأسئلة الشائعة</Link>
                    </li>
                    <li className='mb-1 text-lg'>
                        <Link href='#'>المنتدى</Link>
                    </li>
                    <li className='mb-1 text-lg'>
                        <Link href='#'>المنتجات</Link>
                    </li>
                </ul>
            </div>
            <div className="about-logo">
                <div className="img w-52 ms-auto mb-4">
                    <Image src='/footer-logo.png' alt='logo' className='w-full' width={100} height={100}/>
                </div>
                <p className=' text-sm w-full lg:w-60 ms-auto'>الدورة تستهدف المبتدئين والباحثين عن الإحتراف في مجال التحليل الفنى وجميع المهتمين بأسواق المال العربية والأجنبية.</p>
            </div>
           </div>
           <div className="copyRight text-center w-full md:w-1/2 m-auto border-t pt-6">
            <p>Copyright © 2024 TTChart, <span className=' underline'>Developed By Innovation Scope</span></p>
           </div>
        </div>
    </footer>
  )
}

export default Footer 