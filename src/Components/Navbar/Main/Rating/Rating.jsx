import React from 'react';

const Rating = () => {
  return (
    <div className='mt-20 px-4 md:px-20'>
      <div className='flex flex-col md:flex-row bg-gradient-to-r from-[#4f39f6] to-[#8c7dfd] justify-between items-center text-white rounded-2xl py-10 md:py-16 gap-6 md:gap-0 px-6 md:px-12'>

    
        <div className='flex flex-col items-center'>
          <h3 className='text-4xl md:text-[60px] font-extrabold'>50K+</h3>
          <p className='text-lg md:text-[24px] font-medium'>Active Users</p>
        </div>

        <div className='hidden md:block border-l border-white h-16'></div>

        
        <div className='flex flex-col items-center'>
          <h3 className='text-4xl md:text-[60px] font-extrabold'>200+</h3>
          <p className='text-lg md:text-[24px] font-medium'>Premium Tools</p>
        </div>

    
        <div className='hidden md:block border-l border-white h-16'></div>

        
        <div className='flex flex-col items-center'>
          <h3 className='text-4xl md:text-[60px] font-extrabold'>4.9</h3>
          <p className='text-lg md:text-[24px] font-medium'>Rating</p>
        </div>

      </div>
    </div>
  );
};

export default Rating;