import Greetings from '@/components/TopBar/Greetings';
import DateTime from '@/components/TopBar/DateTime';
import { Space_Mono } from 'next/font/google';

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export default function TopBar() {
  return (
    <div>
      <div
        className={`${spaceMono.className} w-full my-8 md:my-16 flex items-center justify-between`}
      >
        <Greetings />
        <DateTime />
      </div>
      <hr className='opacity-25 md:mb-12' />
    </div>
  );
}
