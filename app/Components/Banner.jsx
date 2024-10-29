import React from 'react'
const Banner = async () => {

  //GET DATA
  async function getHome() {
    const res = await fetch('https://www.ttchart.com/public/api');
    const data = await res.json();
    return data
  }
  let data = await getHome()
  


  return (
    <header className='relative'>
      <div className=" banner h-[100vh]">
        <img src={data.page.cover} alt="home-cover" className=' object-cover h-full w-full' />
      </div>
      <div className="absolute right-0 left-0 top-1/3 md:top-1/2">
      <div className="text text-white text-right container ">
        <h2 className='font-bold text-5xl mb-8'>{data.page.title}</h2>
        <div className='w-full  lg:w-1/2 ms-auto text-lg' dangerouslySetInnerHTML={{__html:data.page.description}}></div>
        </div>
      </div>
    </header>
  )
}

export default Banner