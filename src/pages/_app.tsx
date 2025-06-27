import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Inter, Space_Grotesk } from 'next/font/google';
import Head from 'next/head';
import dynamic from 'next/dynamic';

// Dynamically import the SpaceBackground component with SSR disabled
const SpaceBackground = dynamic(
  () => import('@/components/SpaceBackground'),
  { ssr: false }
);
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>FAGGATRONS</title>
        <meta name="description" content="FAGGATRONS. More than meets the eye. Fighting Homophobicons across the galaxy." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/trans.png" type="image/png" />
        <link rel="shortcut icon" href="/trans.png" type="image/png" />
        
        {/* Primary Meta Tags */}
        <meta name="title" content="FAGGATRONS" />
        <meta name="description" content="FAGGATRONS. More than meets the eye. Fighting Homophobicons across the galaxy." />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://faggatrons.com/" />
        <meta property="og:title" content="FAGGATRONS" />
        <meta property="og:description" content="FAGGATRONS. More than meets the eye. Fighting Homophobicons across the galaxy." />
        <meta property="og:image" content="https://faggatrons.com/banner.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://faggatrons.com/" />
        <meta property="twitter:title" content="FAGGATRONS" />
        <meta property="twitter:description" content="FAGGATRONS. More than meets the eye. Fighting Homophobicons across the galaxy." />
        <meta property="twitter:image" content="https://faggatrons.com/banner.jpg" />
        
        {/* Additional Meta Tags */}
        <meta name="theme-color" content="#000000" />
      </Head>
      <style jsx global>{`
        :root {
          --font-sans: ${inter.style.fontFamily};
          --font-display: ${spaceGrotesk.style.fontFamily};
        }
      `}</style>
      <div className="relative min-h-screen bg-black">
        <SpaceBackground />
        <div 
          className={`${inter.variable} ${spaceGrotesk.variable} font-sans relative z-10`} 
          style={{ backgroundColor: 'transparent' }}
        >
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
}
