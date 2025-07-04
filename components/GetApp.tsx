
import React from 'react'
import Button from './Button'
import Image from 'next/image'

const GetApp = () => {
  return (
    <section className='flexCenter w-full flex-col' id="downloads">
        <div className='max-container relative flex w-full flex-col justify-between gap-32 overflow-hidden px-6 py-12 sm:flex-row sm:gap-12 sm:py-24 lg:px-20 xl:max-h-[598px] 2xl:rounded-5xl'>
            <div className='z-20 flex w-full flex-1 flex-col items-start justify-center gap-4 xl:max-w-[555px]'>
                <h2 className='bold-40 lg:bold-64'>Get our App now!</h2>
                <h4 className='uppercase medium-16 text-secondary'>AVAILABLE FOR IOS AND ANDROID</h4>
                <p className='py-4'>Explore destinations effortlessly with our iOS and Android app—real-time bookings, interactive maps, and exclusive deals at your fingertips.</p>
                <div className='flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row'>
                    <Button type='button' title='App Store' icon='/apple.svg' variant='btn_dark_rounded !px-12 !py-4'/>
                    <Button type='button' title='Play Store' icon='/android.svg' variant='btn_secondary_rounded !px-12 !py-4'/>
                </div>
            </div>
            <div className='flex flex-1 items-center justify-end'>
                <Image src="/phones.png" alt='phones' width={550} height={870}/>
            </div>
        </div>
    </section>
  )
}

export default GetApp