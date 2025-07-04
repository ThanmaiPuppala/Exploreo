"use client"
import { TESTIMONIALS } from '@/constant'
import Image from 'next/image'
import React from 'react'
import { FaQuoteLeft } from 'react-icons/fa'
import Slider from 'react-slick'
import Accordion from './Accordion'

const Testimonial = () => {
    const settings={
        arrows:false,
        infinite:true,
        autoplay:true,
        slidesToScroll:1,
        responsive:[
            {
                breakpoint:700,
                settings:{
                    slidesToShow:1,
                },
            },
        ],
    };
  return (
   <section className='max_padd_container py-16 bg-white relative' id='testimonials'>
    <div className='flex flex-col lg:flex-row gap-y-8'>
        {/* left */}
        <div>
            <h4 className='bold-18 text-secondary'>HAPPY CUSTOMER</h4>
            <h3 className='h3 max-w-lg'>Testimonials</h3>
            <div className='max-w-[666px]'>
                <Slider {...settings}>
                    {TESTIMONIALS.map((testimonial)=>(
                        <TestimonialItem key={testimonial.URL} URL={testimonial.URL} title={testimonial.title} profession={testimonial.profession} des={testimonial.des}/>
                    ))}
                </Slider>
            </div>
        </div>
        {/* right */}
        <div>
            <Accordion/>
        </div>
    </div>
   </section>
  )
}
type TestimonialItem={
    des:string;
    title:string;
    URL:string;
    profession:string;
}
const TestimonialItem=({title,URL,profession,des}:TestimonialItem)=>{
    return(
        <div className='my-8 rounded-md z-10'>
            <div className='pb-6'>
                <Image src={URL} alt={title} height={77} width={77} className='rounded-full mb-4 h-[77px] w-[77px]'/>
                <div>
                    <div className='medium-20 text-secondary'>{title}</div>
                    <div className='text-gray-20 regular-14'>{profession}</div>
                </div>
            </div>
            <span className='text-3xl -z-10'><FaQuoteLeft/></span>
            <p className='max-w-lg pt-3 text-gray-50'>{des}</p>
        </div>
    )
}
export default Testimonial