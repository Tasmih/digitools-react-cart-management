import React from 'react';

const ReadyToStart = () => {
  return (
    <section
      style={{ background: 'linear-gradient(90deg, #4f39f6 0%, #a855f7 100%)' }}
      className="py-16 md:py-24 text-center text-white px-4 md:px-6"
    >
      
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
        Ready To Transform Your Workflow?
      </h1>

      
      <p className="mt-3 md:mt-4 text-sm sm:text-base text-gray-100">
        Join thousands of professionals who are already using Digitools to work smarter.Start your free trial today.
      </p>

    
      <div className="mt-6 md:mt-8 flex flex-col sm:flex-row justify-center gap-4">
        <button className="bg-white text-purple-700 px-6 py-2.5 md:py-3 rounded-full font-semibold 
hover:text-purple-900 hover:bg-gray-100 transition-colors duration-300 ease-in-out">
  Explore Products
</button>
        <button className="border border-white px-6 py-2.5 md:py-3 rounded-full text-white hover:bg-white hover:text-purple-700 transition-all">
          View Pricing
        </button>
        
      </div>
       <div>
                <p className="mt-3 md:mt-4 text-sm sm:text-base text-gray-100">
         14-day free trial • No credit card required • Cancel anytime
      </p>
      </div>
      
    </section>
  );
};

export default ReadyToStart;