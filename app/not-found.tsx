import Image from 'next/image';
import Link from 'next/link';

export default function Custom404() {
  return (
    <div className='flex flex-col items-center justify-center h-full space-y-2 lg:space-y-4'>
      <Image
        className='w-1/2 lg:w-72'
        src='/gif/herta.gif'
        alt='Herta 404'
        width='500'
        height='500'
      />
      <div className='flex flex-col items-center justify-center space-y-2 lg:space-y-4'>
        <h1 className='font-bold text-3xl lg:text-5xl'>Oops!</h1>
        <p className='font-semibold text-xl lg:text-2xl'>
          Looks like you&apos;re lost.
        </p>
        <Link
          href='/'
          className='desktop-only underline lg:hover:text-highlight'
        >
          BACK TO HOME
        </Link>
      </div>
    </div>
  );
}
