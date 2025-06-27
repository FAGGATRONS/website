import React from 'react';
import { FaWallet, FaExchangeAlt, FaCheck, FaArrowRight } from 'react-icons/fa';

declare global {
  interface Window {
    ethereum?: {
      request: <T = unknown>(request: { method: string; params?: Array<unknown> }) => Promise<T>;
      isMetaMask?: boolean;
    };
  }
}

const HowToBuy = () => {
  const steps = [
    {
      icon: <FaWallet className="w-6 h-6" />,
      title: 'Set Up a Wallet',
      description: 'Download Phantom or the Solana wallet of your choice.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <FaExchangeAlt className="w-6 h-6" />,
      title: 'Get SOL',
      description: 'Purchase SOL from a trusted exchange.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <FaExchangeAlt className="w-6 h-6" />,
      title: 'Swap on DEX',
      description: 'Using Juptier or your favorite DEX, swap SOL for FAGGATRONS.',
      color: 'from-pink-500 to-red-500'
    },
    {
      icon: <FaCheck className="w-6 h-6" />,
      title: 'You\'re Done!',
      description: 'HODL your FAGGATRONS as tight as you can!',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <section id="howtobuy" className="py-32 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 "></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
      </div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-pink-500/20 text-blue-400 text-sm font-medium mb-4">
            GET STARTED
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            How to Buy <span className="rainbow-text">FAGGATRONS</span>
          </h2>
          <p className="text-xl text-gray-300">
            Join the revolution in just a few simple steps
          </p>
        </div>

        {/* Desktop Steps */}
        <div className="hidden md:grid grid-cols-4 gap-8 max-w-6xl mx-auto mb-20 relative">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <div className="relative">
                <div className={`bg-gradient-to-br ${step.color} rounded-2xl p-1 h-full`}>
                  <div className="glass-card h-full p-6 rounded-xl">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-4 mx-auto`}>
                      {React.cloneElement(step.icon, { className: 'w-6 h-6 text-white' })}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-center">{step.title}</h3>
                    <p className="text-gray-300 text-center text-sm">{step.description}</p>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                    <div className="w-12 h-12 rounded-full bg-gray-800/80 backdrop-blur-sm flex items-center justify-center border border-white/10">
                      <FaArrowRight className="w-5 h-5 text-gray-300" />
                    </div>
                  </div>
                )}
              </div>
            </React.Fragment>
          ))}
        </div>

        {/* Mobile Steps */}
        <div className="md:hidden space-y-8 max-w-md mx-auto mb-16">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start">
              <div className="flex flex-col items-center mr-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center`}>
                  {React.cloneElement(step.icon, { className: 'w-6 h-6 text-white' })}
                </div>
                {index < steps.length - 1 && (
                  <div className="h-16 w-0.5 bg-gradient-to-b from-gray-700 to-transparent my-2"></div>
                )}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-1">{step.title}</h3>
                <p className="text-gray-300 text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Removed action buttons as per request */}
      </div>
    </section>
  );
};

export default HowToBuy;
