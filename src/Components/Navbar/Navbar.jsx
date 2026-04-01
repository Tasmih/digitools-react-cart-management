import React from 'react';
import cartImg from '../../assets/shopping-cart.png';

const Navbar = ({ quantity }) => {
  return (
    <div>
      <div className='flex justify-between items-center container mx-auto px-4 md:px-6 py-4'>
        
        <h1 className='text-2xl md:text-5xl font-bold bg-gradient-to-r from-[#4f39f6] to-[#8474fd] bg-clip-text text-transparent'>
          DigiTools
        </h1>

        <ul className='hidden md:flex gap-3 font-semibold'>
          <li><a href="">Products</a></li>
          <li><a href="">Features</a></li>
          <li><a href="">Pricing</a></li>
          <li><a href="">Testimonials</a></li>
          <li><a href="">FAQ</a></li>
        </ul>

        <div className='flex gap-2 md:gap-4 items-center'>
          <div className='flex items-center gap-1'>
            <span className="font-semibold">{quantity}</span>
            <img className='w-6 h-6' src={cartImg} alt="cart" />
          </div>

          <p className='hidden md:block'>Login</p>

          <button className="btn btn-active bg-gradient-to-r from-[#4f39f6] to-[#8c7dfd] rounded-4xl text-white text-sm md:text-base px-3 md:px-5">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;