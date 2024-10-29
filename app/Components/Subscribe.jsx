import React from 'react'

const Subscribe = () => {

  return (
    <form>
        <h2 className=' font-bold text-2xl mb-3'>الدعم</h2>
        <input type='text' placeholder='ادخل البريد الالكتروني' className=' mb-3 border text-right px-2 py-3 rounded-md text-sm w-full'/>
        <button className="bg-red-500 hover:bg-red-700 duration-500  w-full text-lg text-white font-bold py-2 px-16 rounded-lg"
        >
            اشترك الأن
          </button>
    </form>
  )
}

export default Subscribe