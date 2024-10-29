'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = () => {
    const pathName = usePathname();
    const [open, setOpen]= useState(false)
    const [dropMenu , setDropMenu] = useState(false)

    

  return (
    <nav className=' nav-background  z-30 text-white  py-8 absolute top-0 left-0 right-0'>
        <div className="container">
            <div className="navBar flex items-center justify-between">
            <button className=' hidden md:inline-block bg-red-600 md:px-4 lg:px-7 py-3 rounded-md hover:bg-red-700 duration-500 font-bold md:text-[12px] lg:text-lg'> تسجيل الدخول</button>
            <div className="links relative">
                <ul className=' hidden md:flex items-center justify-around md:text-[10px] lg:text-sm xl:text-xl md:space-x-2 lg:space-x-5 xl:space-x-8'>
                    <li> <Link href='/products' className={ `hover:text-red-500 duration-200 ${pathName === '/products'? 'text-red-500' : ''}`}> المنتجات</Link></li>
                    <li> <Link href='/montada' className={ `hover:text-red-500 duration-200 ${pathName === '/montada'? 'text-red-500' : ''}`}>المنتدى</Link> </li>
                    <li> <Link href='/contact' className={ `hover:text-red-500 duration-200 ${pathName === '/contact'? 'text-red-500' : ''}`}>اتصل بنا</Link> </li>
                    <li> <Link href='/Question' className={ `hover:text-red-500 duration-200 ${pathName === '/Question'? 'text-red-500' : ''}`}>الأسئلة الشائعة</Link> </li>
                    <li className=' relative' onClick={()=>setDropMenu(!dropMenu)}> <button className= 'hover:text-red-500 duration-200}'> <span><i className="fa-solid fa-caret-down"></i></span> الدورات</button>
                     {dropMenu !== false && <ul className=' absolute space-y-2 text-slate-400 bg-white text-center px-4 py-3 rounded-xl top-9 -left-2 shadow-sm shadow-slate-700'>
                        <li><Link href='/free' className={ `hover:text-red-500 duration-200 ${pathName === '/free'? 'text-red-500' : ''}`}> مجانية</Link></li>
                        <li><Link href='/paid' className={ `hover:text-red-500 duration-200 ${pathName === '/paid'? 'text-red-500' : ''}`}> مدفوعة</Link></li>
                    </ul>}
                    </li>
                    <li> <Link href='/know' className={ `hover:text-red-500 duration-200 ${pathName === '/know'? 'text-red-500' : ''}`}>إعرف عنا</Link> </li>
                    <li> <Link href='/' className={ `hover:text-red-500 duration-200 ${pathName === '/'? 'text-red-500' : ''}`}>الرئيسية</Link> </li>
                </ul>

                <button className=' md:hidden border p-2 px-3 rounded-lg text-lg hover:bg-red-500 duration-200 '
                onClick={()=>setOpen(!open)}
                ><i className="fa-solid fa-bars"></i></button>
            
                {open !== false  && <ul className=' flex flex-col-reverse text-center gap-4 bg-slate-900 bg-opacity-80 py-4 w-80 mt-8 rounded-lg absolute md:hidden items-center shadow-md shadow-slate-700'>
                    <button className=' md:hidden bg-red-600 px-7 py-2 rounded-md hover:bg-red-700 duration-500 font-bold text-md'> تسجيل الدخول</button>
                    
                    <li> <Link href='/products' className={ `px-10 py-2 hover:text-red-500 duration-200${pathName === '/products'? 'text-red-500' : ''}`}> المنتجات</Link></li>
                    <li> <Link href='/montada' className={`px-10 py-2 hover:text-red-500 duration-200 ${pathName === '/montada'? 'text-red-500' : ''}`}>المنتدى</Link> </li>
                    <li> <Link href='/contact' className={ `px-10 py-2 hover:text-red-500 duration-200 ${pathName === '/contact'? 'text-red-500' : ''}`}>اتصل بنا</Link> </li>
                    <li> <Link href='/Question' className={ `px-10 py-2 hover:text-red-500 duration-200 ${pathName === '/Question'? 'text-red-500' : ''}`}>الأسئلة الشائعة</Link> </li>
                    <li className=' relative' onClick={()=>setDropMenu(!dropMenu)}> <button className= 'px-10 py-2 hover:text-red-500 duration-200}'> <span><i className="fa-solid fa-caret-down"></i></span> الدورات</button>
                    {dropMenu !== false && <ul className=' absolute space-y-2 text-slate-400 bg-white text-center px-4 py-3 rounded-xl top-1 right-32 shadow-sm shadow-slate-700'>
                        <li><Link href='/free' className={` hover:text-red-700 duration-200 ${pathName === '/free'? 'text-red-500' : ''}`}> مجانية</Link></li>
                        <li><Link href='/paid' className={` hover:text-red-700 duration-200 ${pathName === '/paid'? 'text-red-500' : ''}`}> مدفوعة</Link></li>
                    </ul>}
                    
                    </li>
                    <li> <Link href='/know' className={ ` px-10 py-2 hover:text-red-500 duration-200 ${pathName === '/know'? 'text-red-500' : ''}`}>إعرف عنا</Link> </li>
                    <li> <Link href='/' className={ `px-10 py-2 hover:text-red-500 duration-200 ${pathName === '/'? 'text-red-500' : ''}`}>الرئيسية</Link> </li>
                </ul>}
            
            </div>
            <div className="logo">
                <Link href='/'><img src='/Logo.png' alt="Logo" width={200} /></Link>
            </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar