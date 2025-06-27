import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaCopy } from 'react-icons/fa';

const Header = () => {
  const [copied, setCopied] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const contractAddress = '0x0000000000000000000000000000000000000000';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <header className={`sticky top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/80 backdrop-blur-md py-2' : 'bg-black/30 backdrop-blur-sm py-4'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center group">
          <div className="relative h-12 w-12 transition-transform group-hover:scale-105">
            <Image 
              src="/logo.png" 
              alt="FAGGATRONS" 
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>
        
        <nav className="flex items-center space-x-4 sm:space-x-6">
          <a 
            href="#about" 
            className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors font-medium"
          >
            About
          </a>
          <a 
            href="#howtobuy" 
            className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors font-medium"
          >
            How to Buy
          </a>
          <button 
            onClick={copyToClipboard}
            className="flex items-center space-x-1.5 bg-white/10 hover:bg-white/20 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all"
            aria-label="Copy contract address"
          >
            <span className="hidden sm:inline">
              {copied ? 'Copied!' : `${contractAddress.slice(0, 6)}...${contractAddress.slice(-4)}`}
            </span>
            <FaCopy className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
