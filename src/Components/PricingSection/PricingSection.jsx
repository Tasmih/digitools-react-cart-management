import React from "react";
import { FaCheck } from "react-icons/fa";

const PricingSection = () => {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        <h1 className="text-3xl md:text-5xl font-extrabold text-center text-[#1f2937]">
          Simple, Transparent Pricing
        </h1>
        <p className="text-center text-gray-500 mt-3 md:mt-4 text-sm md:text-base mb-12 md:mb-16">
          Choose the plan that fits your needs. Upgrade anytime.
        </p>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 items-stretch">
          
          
          <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col min-h-[560px">
            <h2 className="font-bold text-lg md:text-xl">Starter</h2>
            <p className="text-gray-400 text-sm mt-1">Perfect for getting started</p>
            <h1 className="text-3xl md:text-5xl font-bold mt-6">$0</h1>
            <p className="text-gray-400 mb-6">/month</p>
            <ul className="space-y-2 md:space-y-3 text-sm">
              <li className="flex items-center gap-2"><FaCheck className="text-green-500"/> Access to 10 free tools</li>
              <li className="flex items-center gap-2"><FaCheck className="text-green-500"/> Basic templates</li>
              <li className="flex items-center gap-2"><FaCheck className="text-green-500"/> Community support</li>
              <li className="flex items-center gap-2"><FaCheck className="text-green-500"/> 1 project per month</li>
            </ul>
            <button className="w-full mt-auto py-3 rounded-full bg-purple-600 text-white md:py-3  font-semibold hover:bg-purple-700 transition-colors">
              Get Started Free
            </button>
          </div>

    
          <div
            className="rounded-2xl p-6 md:p-8 text-white relative shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col min-h-[560px"
            style={{ background: "linear-gradient(180deg, #4f39f6 0%, #a855f7 100%) " }}
          >
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-300 text-black text-xs px-2.5 py-1 rounded-full font-medium">
              Most Popular
            </span>
            <h2 className="font-bold text-lg md:text-xl">Pro</h2>
            <p className="text-sm mt-1">Best for professionals</p>
            <h1 className="text-3xl md:text-5xl font-bold mt-6">$29</h1>
            <p className="mb-6">/month</p>
            <ul className="space-y-2 md:space-y-3 text-sm">
              <li className="flex items-center gap-2"><FaCheck /> Access to all premium tools</li>
              <li className="flex items-center gap-2"><FaCheck /> Unlimited templates</li>
              <li className="flex items-center gap-2"><FaCheck /> Priority support</li>
              <li className="flex items-center gap-2"><FaCheck /> Unlimited projects</li>
              <li className="flex items-center gap-2"><FaCheck /> Cloud sync</li>
              <li className="flex items-center gap-2"><FaCheck /> Advanced analytics</li>
            </ul>
            <button className="w-full  mt-auto md:mt-8 bg-white text-purple-700 py-3 md:py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Start Pro Trial
            </button>
          </div>

          
          <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col min-h-[560px">
            <h2 className="font-bold text-lg md:text-xl">Enterprise</h2>
            <p className="text-gray-400 text-sm mt-1">For teams and businesses</p>
            <h1 className="text-3xl md:text-5xl font-bold mt-6">$99</h1>
            <p className="text-gray-400 mb-6">/month</p>
            <ul className="space-y-2 md:space-y-3 text-sm">
              <li className="flex items-center gap-2"><FaCheck className="text-green-500"/> Everything in Pro</li>
              <li className="flex items-center gap-2"><FaCheck className="text-green-500"/> Team collaboration</li>
              <li className="flex items-center gap-2"><FaCheck className="text-green-500"/> Custom integrations</li>
              <li className="flex items-center gap-2"><FaCheck className="text-green-500"/> Dedicated support</li>
              <li className="flex items-center gap-2"><FaCheck className="text-green-500"/> SLA guarantee</li>
              <li className="flex items-center gap-2"><FaCheck className="text-green-500"/> Custom branding</li>
            </ul>
            <button className="w-full  mt-auto py-3  md:mt-8 bg-purple-600 text-white md:py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors">
              Contact Sales
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PricingSection;