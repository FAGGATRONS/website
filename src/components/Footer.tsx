import React from 'react';
import Image from 'next/image';
import { FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    { icon: <FaTwitter className="w-5 h-5" />, url: 'https://x.com/faggatrons2025', label: 'Twitter' },
    { icon: <FaYoutube className="w-5 h-5" />, url: 'https://www.youtube.com/@FAGATRONS2025', label: 'Youtube' }
  ];


  return (
    <footer className="relative pb-12 overflow-hidden">
      
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <div className="relative h-120 w-120 mr-3">
                <Image 
                  src="/logo.png" 
                  alt="FAGGATRONS" 
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
            <p className="text-gray-400 max-w-md">
              Fighting HOMOPHOBICONS across the galaxy.
            </p>
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-gray-300 hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Navigation</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#howtobuy" className="text-gray-400 hover:text-white transition-colors">How to Buy</a></li>
              <li><a href="#trailer" className="text-gray-400 hover:text-white transition-colors">Trailer</a></li>
            </ul>
          </div>
          
          <div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm text-center md:text-left mb-4 md:mb-0">
            © {currentYear} FAGGATRONS. All rights reserved.
          </p>
          
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
