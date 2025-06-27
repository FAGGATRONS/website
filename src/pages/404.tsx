import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { FaArrowLeft, FaHome } from 'react-icons/fa';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black to-gray-900 text-white p-6 relative overflow-hidden">
      <Head>
        <title>Page Not Found | FAGGATRONS</title>
        <meta name="description" content="The page you're looking for doesn't exist or has been moved." />
      </Head>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-pink-500/5 via-purple-500/5 to-transparent"></div>
      </div>
      
      <div className="text-center max-w-2xl mx-auto">
        <div className="text-9xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
          404
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Page Not Found</h1>
        
        <p className="text-xl text-gray-300 mb-10 max-w-2xl">
          Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/" className="button flex items-center justify-center space-x-2">
            <FaHome className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>
          
          <button 
            onClick={() => window.history.back()}
            className="px-8 py-4 text-lg bg-transparent border-2 border-white/20 hover:border-white/40 rounded-full transition-colors flex items-center justify-center space-x-2"
          >
            <FaArrowLeft className="w-5 h-5" />
            <span>Go Back</span>
          </button>
        </div>
      </div>
      
      {/* Animated floating elements */}
      <div className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-pink-500/30 animate-float"></div>
      <div className="absolute top-1/3 right-1/4 w-6 h-6 rounded-full bg-purple-500/20 animate-float animation-delay-2000"></div>
      <div className="absolute bottom-1/4 left-1/3 w-8 h-8 rounded-full bg-indigo-500/20 animate-float animation-delay-4000"></div>
    </div>
  );
};

export default NotFoundPage;
