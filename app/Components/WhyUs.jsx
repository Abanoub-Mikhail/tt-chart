import React from 'react'

const WhyUs = () => {
  return (
    <section className=" relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('/bg.png')` }}>
        <div className="dark-bg absolute top-0 bottom-0 right-0 left-0 bg-black bg-opacity-20"></div>
        <div className="container relative z-40 py-28">
        <h2 className=' text-center text-4xl text-white font-bold mb-10'>لماذا تختار التدرب معنا؟</h2>
        <div className="cards grid grid-cols-1 md:grid-cols-3 md:px-7 md:gap-x-7 gap-y-7 md:gap-y-0 text-gray-500">
            <div className="item py-10 px-7 text-center bg-white rounded-xl text-lg">
                <p>احد افضل المدربين في الشرق الأوسط في مجال التحليل الفني لاسواق المال المحلية والعالمية , وقد قام بنقل خبرته الممتده ل 20 سنة للمتدربين والمهتمين من خلال عقد الدورات التدريبية والندوات المتنوعة</p>
            </div>
            <div className="item py-10 px-7 text-center bg-white rounded-xl text-lg ">
                <p>احد افضل المدربين في الشرق الأوسط في مجال التحليل الفني لاسواق المال المحلية والعالمية , وقد قام بنقل خبرته الممتده ل 20 سنة للمتدربين والمهتمين من خلال عقد الدورات التدريبية والندوات المتنوعة</p>
            </div>
            <div className="item py-10 px-7 text-center bg-white rounded-xl text-lg">
                <p>احد افضل المدربين في الشرق الأوسط في مجال التحليل الفني لاسواق المال المحلية والعالمية , وقد قام بنقل خبرته الممتده ل 20 سنة للمتدربين والمهتمين من خلال عقد الدورات التدريبية والندوات المتنوعة</p>
            </div>
        </div>
        </div>
    </section>
  )
}

export default WhyUs