"use client"
import React, { useState } from 'react';
import { MdLocationPin } from 'react-icons/md';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Hero = () => {
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [price, setPrice] = useState(1000);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // prevent reload

    // Validate inside handler 
    if (location.trim() === '' || date.trim() === '' || price < 1000) {
      toast.error("Please fill in all fields.");
      return;
    }

    // ✅ Show toast BEFORE resetting
    toast.success('You planned your trip successfully!');

    // ✅ Reset after short delay to allow toast to show
    setTimeout(() => {
      setLocation('');
      setDate('');
      setPrice(1000);
    }, 300);
  };

  return (
    <section className='max_padd_container w-full relative flexCenter' id='home'>
      <ToastContainer position="top-center" autoClose={2000} />

      <div className='absolute h-full w-full bg-[#2f6a7f2f] top-0 bottom-0 z-10'></div>
      <video src={"./video.mp4"} muted autoPlay loop className='absolute h-full w-full top-0 bottom-0 object-cover'></video>

      <div className='w-full h-max pt-28 pb-12 flex gap-y-3 flex-col justify-center m-auto z-20 lg:pt-64 lg:pb-24'>
        <div className='px-0 py-8 text-white'>
          <span className='uppercase regular-18'>TRAVEL TO ANY CORNER OF THE WORLD</span>
          <h2 className='h2 max-w-[777px]'>Make Your Tour Amazing With Us</h2>
        </div>

        {/* Form */}
        <div>
          <div className='text-center'>
            <span className='bg-white text-tertiary medium-16 px-12 py-4 rounded-l-xl rounded-r-xl'>
              Search for your Trip
            </span>
          </div>

          <div className='flex flex-col md:flex-row gap-6 px-8 py-10 md:px-12 bg-white rounded-xl'>
            {/* Location Input */}
            <div className='flex flex-col w-full xl:px-6'>
              <label htmlFor="city" className='block text-gray-50 pb-2'>Search For Your Destination:</label>
              <div className='flexCenter h-10 px-4 bg-primary rounded-full w-full'>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder='Enter your Location'
                  className='bg-transparent border-none outline-none w-full regular-14'
                />
                <MdLocationPin className='text-lg' />
              </div>
            </div>

            {/* Date Input */}
            <div className='flex flex-col w-full xl:px-6'>
              <label htmlFor="date" className='block text-gray-50 pb-2'>Select Your Date:</label>
              <div className='flexCenter h-10 px-4 bg-primary rounded-full w-full'>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className='bg-transparent border-none outline-none w-full regular-14'
                />
              </div>
            </div>

            {/* Price Input */}
            <div className='flex flex-col w-full xl:px-6'>
              <div className='flexBetween items-center'>
                <label htmlFor="price" className='block text-gray-50 pb-2'>Max Price:</label>
                <h4>${price}</h4>
              </div>
              <div className='flexCenter h-10 px-4 bg-primary rounded-full w-full'>
                <input
                  type="range"
                  max="5000"
                  min="1000"
                  step="100"
                  value={price}
                  onChange={(e) => setPrice(Number(e.target.value))}
                  className='border-none outline-none w-full regular-14'
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className='flex justify-center mt-6'>
            <button
              className='bg-secondary text-white px-6 py-3 rounded-xl'
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
