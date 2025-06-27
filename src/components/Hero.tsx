import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative pt-8 md:pt-16 pb-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div id="trailer" className="py-8">
          <div className="max-w-5xl mx-auto px-4">
            <div className="rainbow-glow rounded-2xl p-1">
              <div className="video-container rounded-xl overflow-hidden">
                <iframe 
                  src="https://www.youtube.com/embed/1sbML4XbFBs?autoplay=0&showinfo=0&controls=1&rel=0&modestbranding=1" 
                  title="FAGGATRONS Trailer"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full aspect-video"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-12">
          <div className="flex justify-center">
            <Image 
              src="/michaelgay.png" 
              alt="Michael Gay" 
              width={200}
              height={200}
              className="object-contain w-auto h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
