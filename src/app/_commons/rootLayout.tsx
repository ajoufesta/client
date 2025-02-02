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
        }}
        className="w-screen max-w-screen-sm flex flex-col items-center mx-auto bg-orange-gradient"
      >
        <main
          style={{ height: `calc(var(--vh, 1vh) * 100 - 84px)` }}
          className="w-full px-[2rem] py-14 flex flex-col items-center justify-center relative"
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
