import React from 'react';
import powerImg from '../../../../assets/power-dot.png';
import watchImg from '../../../../assets/Play.png';
import bannerImg from '../../../../assets/banner.png';

const Banner = () => {
  return (
    <div className='px-4 md:px-20 pt-10 md:pt-20'>
      <div className='md:flex justify-between items-center'>
        
        
        <div className="left my-5 space-y-4 md:space-y-6 flex-1">
          <button className='flex items-center gap-2 bg-[#e1e7ff] rounded-2xl px-3 py-1 text-[#4f39f6] text-sm md:text-base'>
            <img src={powerImg} alt="power icon" />
            New: AI-Powered Tools Available
          </button>

          <h2 className='text-[#101727] text-3xl md:text-[72px] font-bold leading-snug md:leading-tight'>
            Supercharge Your <br className='hidden md:block' /> Digital Workflow
          </h2>

          <p className='text-[#627382] text-sm md:text-base leading-relaxed md:leading-loose'>
            Access premium AI tools, design assets, templates, and productivity <br className='md:hidden' />
            software—all in one place. Start creating faster today.<br className='md:hidden' />
            Explore Products
          </p>

          <div className='flex flex-col sm:flex-row gap-3 md:gap-4 mt-4'>
            <button className="btn btn-active bg-gradient-to-r from-[#4f39f6] to-[#8c7dfd] rounded-4xl text-white px-4 py-2 text-sm md:text-base">
              Explore Products
            </button>

            <button className="btn btn-outline btn-primary rounded-4xl flex items-center gap-2 px-4 py-2 text-sm md:text-base">
              <img src={watchImg} alt="play icon" className='w-5 h-5 md:w-6 md:h-6' /> Watch Demo
            </button>
          </div>
        </div>


        <div className="right flex-1 mt-10 md:mt-0">
          <img className='w-full' src={bannerImg} alt="banner" />
        </div>
      </div>
    </div>
  );
};

export default Banner;