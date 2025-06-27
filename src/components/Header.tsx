import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaCopy, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [copied, setCopied] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`sticky top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/80 backdrop-blur-md py-2' : 'bg-black/30 backdrop-blur-sm py-4'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center group">
          <div className="relative h-8 w-48 sm:h-10 sm:w-64 md:h-12 md:w-96 transition-transform group-hover:scale-105">
            <Image 
              src="/logo.png" 
              alt="FAGGATRONS" 
              fill
              className="object-contain"
              priority
              sizes="(max-width: 640px) 12rem, (max-width: 768px) 16rem, 24rem"
            />
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a 
            href="#about" 
            className="text-gray-300 hover:text-white transition-colors font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </a>
          <a 
            href="#howtobuy" 
            className="text-gray-300 hover:text-white transition-colors font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            How to Buy
          </a>
          <button 
            onClick={copyToClipboard}
            className="flex items-center space-x-1.5 bg-white/10 hover:bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium transition-all"
            aria-label="Copy contract address"
          >
            <span>{copied ? 'Copied!' : `${contractAddress.slice(0, 6)}...${contractAddress.slice(-4)}`}</span>
            <FaCopy className="w-4 h-4 text-white" />
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <FaTimes className="w-6 h-6" />
          ) : (
            <FaBars className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md w-full absolute left-0 px-4 pb-4">
          <div className="flex flex-col space-y-4 pt-2">
            <a 
              href="#about" 
              className="text-gray-300 hover:text-white py-2 px-4 rounded-lg hover:bg-white/10 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#howtobuy" 
              className="text-gray-300 hover:text-white py-2 px-4 rounded-lg hover:bg-white/10 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              How to Buy
            </a>
            <button 
              onClick={() => {
                copyToClipboard();
                setIsMenuOpen(false);
              }}
              className="flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg text-sm font-medium transition-all w-full max-w-xs mx-auto"
              aria-label="Copy contract address"
            >
              <span>{copied ? 'Copied!' : 'Copy Contract Address'}</span>
              <FaCopy className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
