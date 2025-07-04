import { PACKAGES } from '@/constant'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { RiMapPinLine, RiTimeLine } from 'react-icons/ri'
import { TbStarFilled, TbStarHalfFilled } from 'react-icons/tb'

const Packages = () => {
  return (
    <section className='max_padd_container py-16 xl:py-28 bg-slate-50' id='listing'>
        <div className='mx-4'>
            <h4 className='bold-18 text-secondary'>TAKE A LOOK AT THESE OFFERS</h4>
            <h3 className='h3 max-w-lg'>We Provide Top Destinations</h3>
            <p className='max-w-lg'>Discover the worlds most stunning destinations with our expertly curated travel offers. From exotic beaches to vibrant cities, we provide unforgettable experiences tailored just for you. Start your dream vacation today and explore top destinations at unbeatable prices!</p>
        </div>
        <div className='grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 py-12'>
            {PACKAGES.map((elem)=>(
                <PackageItem key={elem.URL} URL={elem.URL} title={elem.title}  location={elem.location}  duration={elem.duration} des={elem.des} price={elem.price} />
            ))}
        </div>
    </section>
  )
}
type PackageItemProps={
    URL:string;
    title:string;
    location:string;
    price:string;
    duration:string;
    des:string;
}
const PackageItem=({URL,title,location,price,duration,des}:PackageItemProps)=>{
    return(
    <div className='overflow-hidden rounded-tl-xl rounded-tr-xl border border-slate-200 group'>
        <Link href={'/'} className='overflow-hidden relative'>
        <Image src={URL} height={366} width={640} alt='img' className='w-[640px] h-[366px] transition-all duration-300 ease-out hover:scale-105 hover:opacity-90'/>
        <span className='bold-16 text-white bg-tertiary absolute bottom-0 right-1/2 translate-x-1/2 translate-y-1/2 px-8 py-2 rounded-full group-hover:bg-secondary'>${price}</span>
        </Link>
        <div className='p-4 bg-white'>
            <div className='capitalize medium-22'>
                <span>{title}</span>
                <div className='flex items-center gap-x-2 my-1'><RiMapPinLine className='text-gray-50'/> <span className='regular-16 text-gray-50'>{location }</span></div>
            </div>
            <hr className='mt-3'/>
            <p className='my-3'>{des}</p>
            <hr className='mb-3'/>
            <div className='flexBetween'>
                <div className='flexCenter gap-x-4'>
                    <div className='flexCenter gap-x-2 text-secondary'>
                        <TbStarFilled/>
                        <TbStarFilled/>
                        <TbStarFilled/>
                        <TbStarFilled/>
                        <TbStarHalfFilled/>
                    </div>
                </div>
                <div className='flexStart gap-2 text-gray-50'><RiTimeLine className='text-lg'/><span className='medium-16'>{duration}</span></div>
            </div>
        </div>
    </div>
    )
}
export default Packages