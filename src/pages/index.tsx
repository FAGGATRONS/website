import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import Head from 'next/head';

// Dynamically import components with no SSR to avoid hydration issues
const Header = dynamic(() => import('../components/Header'), { ssr: false });
const Hero = dynamic(() => import('../components/Hero'), { ssr: false });
const About = dynamic(() => import('../components/About'), { ssr: false });
const HowToBuy = dynamic(() => import('../components/HowToBuy'), { ssr: false });
const Footer = dynamic(() => import('../components/Footer'), { ssr: false });

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Or a loading spinner
  }

  return (
    <div className="min-h-screen text-white flex flex-col">
      <Head>
        <title>FAGGATRONS - The Ultimate LGBTQ+ Memecoin</title>
        <meta name="description" content="FAGGATRONS - More than meets the eye! The ultimate LGBTQ+ memecoin celebrating pride and diversity." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://faggatrons.com/" />
        <meta property="og:title" content="FAGGATRONS - The Ultimate LGBTQ+ Memecoin" />
        <meta property="og:description" content="More than meets the eye! The ultimate LGBTQ+ memecoin celebrating pride and diversity." />
        <meta property="og:image" content="https://faggatrons.com/og-image.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://faggatrons.com/" />
        <meta name="twitter:title" content="FAGGATRONS - The Ultimate LGBTQ+ Memecoin" />
        <meta name="twitter:description" content="More than meets the eye! The ultimate LGBTQ+ memecoin celebrating pride and diversity." />
        <meta name="twitter:image" content="https://faggatrons.com/twitter-card.jpg" />
      </Head>
      
      
      <Header />
      <main className="flex-1">
        <Hero />
        <div id="about">
          <About />
        </div>
        <div id="howtobuy">
          <HowToBuy />
        </div>
      </main>
      <Footer />
      
      {/* Custom fonts preload */}
      <link
        rel="preload"
        href="/fonts/space-grotesk.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
    </div>
  );
}
