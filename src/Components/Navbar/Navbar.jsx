import React from 'react';
import cartImg from '../../assets/shopping-cart.png';

const Navbar = ({ quantity }) => {
  return (
    <nav className="bg-white shadow-sm">
      <div className='flex justify-between items-center container mx-auto px-4 md:px-6 py-3 md:py-4'>

        
        <h1 className='text-xl md:text-3xl font-bold bg-gradient-to-r from-[#4f39f6] to-[#8474fd] bg-clip-text text-transparent leading-tight md:leading-snug'>
          DigiTools
        </h1>

        
        <ul className='hidden md:flex gap-3 font-medium text-sm md:text-base'>
          <li><a href="#">Products</a></li>
          <li><a href="#">Features</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Testimonials</a></li>
          <li><a href="#">FAQ</a></li>
        </ul>


        <div className='flex gap-2 md:gap-4 items-center'>

          
          <div className='flex items-center gap-1'>
            
            {quantity > 0 && <span className="font-semibold text-sm md:text-base">{quantity}</span>}
            <img className='w-5 md:w-6 h-5 md:h-6' src={cartImg} alt="cart" />
          </div>

          
          <p className='hidden md:block text-sm md:text-base'>Login</p>

        
          <button className="btn btn-active bg-gradient-to-r from-[#4f39f6] to-[#8c7dfd] rounded-full text-white text-xs md:text-sm px-3 md:px-5 py-1.5 md:py-2">
            Get Started
          </button>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;