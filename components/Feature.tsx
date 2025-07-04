"use client"
import { FEATURE } from '@/constant';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import { CustomArrowProps } from "react-slick";

import Slider from "react-slick";
const Feature = () => {
  const NextArrow = ({ onClick }: CustomArrowProps) => (
  <div
    onClick={onClick}
    className="bg-white text-2xl p-3 inline-block rounded-lg shadow-md absolute top-1/2 right-0 lg:-top-24 lg:right-4 z-10 ring-1 ring-slate-900/5 hover:bg-primary"
  >
    <RiArrowRightSLine />
  </div>
);
  const PrevArrow = ({ onClick }: CustomArrowProps) => (
  <div
    onClick={onClick}
    className="bg-white text-2xl p-3 inline-block rounded-lg shadow-md absolute top-1/2 lg:-top-24 lg:right-20 z-10 ring-1 ring-slate-900/5 hover:bg-primary"
  >
    <RiArrowLeftSLine />
  </div>
);
  const settings={
    arrows:true,
    infinite:true,
    autoplay:true,
    speed:500,
    slidesToShow:4,
    slidesToScroll:1,
    nextArrow:<NextArrow/>,
    prevArrow:<PrevArrow/>,
    responsive:[
      {
        breakpoint:1400,
        settings:{
           slidesToShow:4,
        },
        
      },
      {
        breakpoint:1200,
        settings:{
           slidesToShow:3,
        },
        
      },
      {
        breakpoint:768,
        settings:{
           slidesToShow:2,
        },
        
      },
      {
        breakpoint:640,
        settings:{
           slidesToShow:1,
        },
        
      },
    ]
  }
  return (
    <section className='max_padd_container py-20 xl:py-32 bg-white' id='feature'>
        <div className='w-[90%] m-auto'>
            <div className='mx-4'>
                <h4 className='bold-lg text-secondary'>WHAT WE SERVE</h4>
                <h3 className='h3 max-w-lg'>We Provide Top Destinations</h3>
                <p className='max-w-lg'>We offer handpicked getaways, from tropical beaches to cultural hotspots, tailored to your dream vacation. Discover hidden gems and popular landmarks with expert-curated travel experiences. Adventure, relaxation, or exploration.we have got the perfect destination for you.</p>
            </div>
            {/* container */}
            <div className='pt-12'>
              <Slider {...settings}>
                {
                  FEATURE.map((feature)=>(
                    <FeatureItem key={feature.URL} URL={feature.URL} title={feature.title} des={feature.des}/>
                  ))
                }
              </Slider>
              
            </div>
        </div>
    </section>

  )
}
type FeatureItemProps={
  URL:string;
  title:string;
  des:string;
}
const FeatureItem=({title,URL,des}:FeatureItemProps)=>{
  return(
    <div className='mx-4 overflow-hidden group'>
      <Link href="/" className='overflow-hidden relative'>
      <div >
      <Image 
       src={URL} 
       alt="Img" 
       width={510} 
      height={400} 
      className='w-[510px] h-[400px] object-cover hover:scale-105 transition-all duration-700 overflow-hidden' 
/>
      </div>
      <h4 className='capitalize regular-22 absolute top-6 left-4 text-white'>{title}</h4>
      <p className='regular-18 absolute bottom-6 right-0 bg-tertiary text-white px-4 py-2 rounded-l-full group-hover:bg-secondary group-hover:!pr-8 translate-all duration-300'>{des}</p>
      </Link> 
    </div>
  )
}
export default Feature