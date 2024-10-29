import React from 'react'

const ProductsCard = ({title , price, special}) => {
  return (
    <div className={` shadow-lg rounded-2xl border-2 border-gray-300 py-6 text-center ${special == 'true' ? 'bg-gray-900 text-white':'bg-white'} `}>
        <h2 className={` text-2xl ${special =='true' ? 'text-white': 'text-gray-500'} font-bold mb-5`}>{title}</h2>
        <p className=' text-3xl lg:text-5xl font-bold mb-5'>{price}$</p>
        <div className={` text-center ${special =='true' ? 'text-white': 'text-gray-500'} md:text-xs lg:text-base mb-10`}>
            <p> هناك حقيقة مثبتة منذ زمن طويل و هي <span><i className="fa-regular fa-square-check"></i></span>  </p>
            <p> هناك حقيقة مثبتة منذ زمن طويل و هي <span><i className="fa-regular fa-square-check"></i></span>  </p>
            <p> هناك حقيقة مثبتة منذ زمن طويل و هي <span><i className="fa-regular fa-square-check"></i></span>  </p>
        </div>
        <button className=' bg-red-600 px-7 py-3 rounded-md text-white hover:bg-red-800'><i className="fa-solid fa-basket-shopping me-2"></i> شراء الأن</button>
    </div>
  )
}

export default ProductsCard