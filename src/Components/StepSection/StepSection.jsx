import React from 'react';
import { BsBoxSeam } from 'react-icons/bs';
import { FaRegUser } from 'react-icons/fa';
import { LuRocket } from 'react-icons/lu';

const StepSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        
        <h1 className="text-3xl md:text-4xl font-bold text-center text-[#1f2937]">
          Get Started in 3 Steps
        </h1>
        <p className="text-center text-gray-500 mt-2 mb-10 text-sm md:text-base">
          Start using premium digital tools in minutes, not hours.
        </p>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Step 1 */}
          <div className="bg-white border rounded-xl p-8 text-center shadow-md hover:shadow-xl transition-shadow duration-300 relative">
            <span className="absolute top-3 right-3 bg-purple-600 text-white text-xs rounded-full px-2 py-1">
              01
            </span>

            <div className="w-16 h-16 mx-auto bg-purple-100 rounded-full flex items-center justify-center text-3xl">
              <FaRegUser className="text-purple-600" />
            </div>

            <h2 className="text-lg font-semibold mt-5 text-[#1f2937]">Create Account</h2>
            <p className="text-gray-500 text-sm mt-3">
              Sign up for free in seconds. No credit card <br /> required.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white border rounded-xl p-8 text-center shadow-md hover:shadow-xl transition-shadow duration-300 relative">
            <span className="absolute top-3 right-3 bg-purple-600 text-white text-xs rounded-full px-2 py-1">
              02
            </span>

            <div className="w-16 h-16 mx-auto bg-purple-100 rounded-full flex items-center justify-center text-3xl">
              <BsBoxSeam className="text-purple-600" />
            </div>

            <h2 className="text-lg font-semibold mt-5 text-[#1f2937]">Choose Products</h2>
            <p className="text-gray-500 text-sm mt-3">
              Browse our catalog and select the tools <br /> that fit your needs.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white border rounded-xl p-8 text-center shadow-md hover:shadow-xl transition-shadow duration-300 relative">
            <span className="absolute top-3 right-3 bg-purple-600 text-white text-xs rounded-full px-2 py-1">
              03
            </span>

            <div className="w-16 h-16 mx-auto bg-purple-100 rounded-full flex items-center justify-center text-3xl">
              <LuRocket className="text-purple-600" />
            </div>

            <h2 className="text-lg font-semibold mt-5 text-[#1f2937]">Start Creating</h2>
            <p className="text-gray-500 text-sm mt-3">
              Download and start using your premium <br /> tools immediately.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StepSection;