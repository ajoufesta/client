'use client';

import { useEffect, useState } from 'react';
import Footer from './Footer';
import { GoogleAnalytics } from '@next/third-parties/google';

const CustomRootLayout = ({ children }: { children: React.ReactNode }) => {
  const [vh, setVh] = useState('100vh');

  useEffect(() => {
    const setVhToWindowHeight = () => {
      const vh = window.innerHeight * 0.01;
      setVh(`${vh}px`);
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    setVhToWindowHeight();
    window.addEventListener('resize', setVhToWindowHeight);
    return () => window.removeEventListener('resize', setVhToWindowHeight);
  }, []);

  return (
    <html lang="ko">
      <body
        style={{
          height: `calc(var(--vh, 1vh) * 100)`,
          background:
            'linear-gradient(192deg, #742215 -22.83%, #CE5350 39.02%, #EAD776 100.87%), #FFF',
        }}
        className="w-screen max-w-screen-sm relative flex flex-col items-center mx-auto"
      >
        <main
          style={{ height: `calc(var(--vh, 1vh) * 100 - 94px)` }}
          className="w-full px-8 py-14 flex flex-col items-center justify-center"
        >
          {children}
        </main>
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-9Q7W6YM2CM" />
    </html>
  );
};

export default CustomRootLayout;
