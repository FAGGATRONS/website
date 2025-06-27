import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Inter, Space_Grotesk } from 'next/font/google';
import Head from 'next/head';
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
        <title>FAGGATRONS - The Ultimate LGBTQ+ Memecoin</title>
        <meta name="description" content="FAGGATRONS - More than meets the eye! The ultimate LGBTQ+ memecoin celebrating pride and diversity." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/trans.png" type="image/png" />
        <link rel="shortcut icon" href="/trans.png" type="image/png" />
      </Head>
      <style jsx global>{`
        :root {
          --font-sans: ${inter.style.fontFamily};
          --font-display: ${spaceGrotesk.style.fontFamily};
        }
      `}</style>
      <div style={{
        position: 'relative',
        minHeight: '100vh',
        backgroundColor: '#000000',
        backgroundImage: 'none'
      }}>
        <div 
          className={`${inter.variable} ${spaceGrotesk.variable} font-sans`} 
          style={{ 
            position: 'relative',
            backgroundColor: 'transparent'
          }}
        >
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
}
