import { Lora, Inter, Plus_Jakarta_Sans } from 'next/font/google';
import localFont from 'next/font/local';

export const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta-sans',
  display: 'swap',
});

export const apfelGrotezk = localFont({
  src: [
    {
      path: '../public/fonts/ApfelGrotezk-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/ApfelGrotezk-Mittel.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/ApfelGrotezk-Fett.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/ApfelGrotezk-Satt.woff2',
      weight: '800',
      style: 'normal',
    },
  ],
  variable: '--font-apfel-grotezk',
  display: 'swap',
});

export const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-lora',
  display: 'swap',
});

export const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-inter',
  display: 'swap',
});


