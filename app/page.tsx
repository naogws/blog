import { Space_Mono } from 'next/font/google';
import Splash from '@/components/Home/Splash';
import Socials from '@/components/Home/Socials';
import BlogLayout from '@/components/Blog/BlogLayout';

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const fetchCache = 'force-no-store';

export default function Home() {
  return (
    <main className='space-y-8 md:space-y-12'>
      <div
        className={`${spaceMono.className} flex flex-col md:flex-row md:items-center md:justify-between space-y-8 md:space-y-0`}
      >
        <hr className='mobile-only opacity-25' />
        <Splash />
        <hr className='mobile-only opacity-25' />
        <Socials />
      </div>
      <hr className='w-full opacity-25' />
      <BlogLayout />
    </main>
  );
}
