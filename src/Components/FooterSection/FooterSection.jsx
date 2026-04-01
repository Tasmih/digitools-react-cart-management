import React from "react";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const FooterSection = () => {
  return (
    <footer className="bg-[#101727] text-white py-12 px-4 sm:px-6 md:px-8 lg:px-20">

      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-start gap-10">

        
        <div className="flex-1">
          <h1 className="text-2xl md:text-3xl font-bold">DigiTools</h1>
          <p className="text-gray-400 text-sm mt-2 md:mt-3">
            Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
          </p>
        </div>

        
        <div className="flex-1">
          <h2 className="font-semibold mb-2">Product</h2>
          <div className="flex flex-col gap-1 text-gray-400 text-sm">
            <span>Features</span>
            <span>Pricing</span>
            <span>Templates</span>
            <span>Integrations</span>
          </div>
        </div>

        
        <div className="flex-1">
          <h2 className="font-semibold mb-2">Company</h2>
          <div className="flex flex-col gap-1 text-gray-400 text-sm">
            <span>About</span>
            <span>Blog</span>
            <span>Careers</span>
            <span>Press</span>
          </div>
        </div>

        
        <div className="flex-1">
          <h2 className="font-semibold mb-2">Resources</h2>
          <div className="flex flex-col gap-1 text-gray-400 text-sm">
            <span>Documentation</span>
            <span>Help Center</span>
            <span>Community</span>
            <span>Contact</span>
          </div>
        </div>

      
        <div className="flex-1">
          <h2 className="font-semibold mb-2">Social Links</h2>
          <div className="flex gap-3 text-xl mt-1">
            <FaYoutube />
            <FaFacebookF />
            <FaXTwitter />
          </div>
        </div>

      </div>

      
      <div className="border-t border-gray-700 my-6"></div>

      
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-3 text-gray-400 text-sm">
        <div className="text-center sm:text-left">© 2026 DigiTools. All rights reserved.</div>

        <div className="flex gap-4 flex-wrap justify-center sm:justify-end">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
          <span>Cookies</span>
        </div>
      </div>

    </footer>
  );
};

export default FooterSection;