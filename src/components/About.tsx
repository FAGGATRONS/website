import React from 'react';
import { FaCopy } from 'react-icons/fa';
import Image from 'next/image';

const About = () => {
  const [copied, setCopied] = React.useState(false);
  const contractAddress = '0x0000000000000000000000000000000000000000';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="about" className="py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-pink-500/20 text-blue-400 text-sm font-medium mb-4">
            ABOUT FAGGATRONS
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">More Than </span><span className="rainbow-text">Meets the Eye</span>
          </h2>
          <p className="text-xl text-gray-300">
            Discover what makes us unique
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 px-4 flex items-center justify-center">
            <div className="relative w-full max-w-md mx-auto flex items-center justify-center" style={{ minHeight: '300px', maxHeight: '80vh' }}>
              <div className="w-full h-full flex items-center justify-center">
                <img
                  src="/optimus.png"
                  alt="Cocktimus Prime - The Leader of FAGGATRONS"
                  className="max-w-full max-h-full w-auto h-auto object-contain transition-transform hover:scale-105"
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    width: 'auto',
                    height: 'auto',
                  }}
                />
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="glass-card p-8 rounded-2xl border border-white/10 backdrop-blur-lg bg-gradient-to-br from-black/80 to-gray-900/80 hover:shadow-2xl transition-all duration-300">
              <div className="flex mb-6">
                <div className="relative h-12 w-12 rounded-lg">
                  <Image
                    src="/trans.png"
                    alt="Transgender Pride Flag"
                    fill
                    className="object-contain"
                    sizes="3rem"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Meet Cocktimus Prime</h3>
              <p className="text-gray-300 mb-6">
                The fearless leader of the FAGGATRONS, Cocktimus Prime stands for fearlessness, pride and the right to be your authentic self. YASSSSSS BITCH! Just like our community, he transforms challenges into opportunities and leads with courage and compassion. You better WERK QWEEEN!
              </p>
              
              {/* Contract Address Pill */}
              <div className="mt-6">
                <div className="inline-flex items-center bg-black/30 rounded-full px-4 py-2 border border-white/10">
                  <img 
                    src="/solana.svg" 
                    alt="Solana" 
                    className="w-4 h-4 mr-2"
                  />
                  <code className="text-xs font-mono mr-2">
                    {`${contractAddress.slice(0, 4)}...${contractAddress.slice(-4)}`}
                  </code>
                  <button
                    onClick={copyToClipboard}
                    className="text-white/60 hover:text-white transition-colors"
                    aria-label="Copy contract address"
                  >
                    <FaCopy className="w-3.5 h-3.5" />
                  </button>
                </div>
                {copied && (
                  <div className="text-green-400 text-xs mt-1">
                    Copied to clipboard!
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
