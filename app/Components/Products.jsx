import React from 'react'
import ProductsCard from './ProductsCard'
import Manasa from './Manasa';

const Products = async () => {

    //GET PLANS
    async function getPlans() {
        const res = await fetch('https://www.ttchart.com/public/api/plans');
        const data = await res.json();
        return data
    }
    let data = await getPlans()

  return (
    <section className=' py-28 bg-gradient-to-b from-red-100 via-slate-50 to-slate-100'>
        <div className="container">
        <h2 className=' text-center text-4xl font-bold mb-10'>المنتجات</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 md:gap-y-0 md:gap-x-3 lg:gap-x-8 xlg:px-24">
            <ProductsCard title={'الباقة الذهبية'} price={50} special={false}/>
            {data.plans.map((item)=>
                <ProductsCard key={item.id} title={item.title} price={item.price} special={item.special_package}/>
            )}
        </div>
        <Manasa/>
        </div>
    </section>
  )
}

export default Products