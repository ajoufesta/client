import './globals.css';
import type { Metadata, Viewport } from 'next';
import CustomRootLayout from './_commons/rootLayout';

export const metadata: Metadata = {
  manifest: '/manifest.json',
  title: {
    template: '%s | 동화', // 접미사 템플릿
    default: '동아리박람회', // 폴백 타이틀
  },
  metadataBase: new URL('https://ajoufesta.com'),
  description: '아주대학교 동아리박람회 도우미',
  keywords: ['아주대학교', '동아리박람회', '아주페스타', '동화'],
  icons: {
    icon: '/favicon.ico',
    apple: [
      { url: '/192.png' },
      { url: '/192.png', sizes: '152x152', type: 'image/png' },
      { url: '/192.png', sizes: '167x167', type: 'image/png' },
      { url: '/192.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  appleWebApp: {
    title: '동화',
    statusBarStyle: 'black-translucent',
    capable: true,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#B67E5C',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <CustomRootLayout>{children}</CustomRootLayout>;
}
