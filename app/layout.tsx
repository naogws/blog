import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import TopBar from '@/components/TopBar/TopBar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Naufal Altaf',
  description: "Naufal Altaf's personal blog.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${inter.className} bg-background text-text flex justify-center w-full`}
      >
        <div className='md:max-w-[68rem] w-full h-full p-4'>
          <TopBar />
          {children}
        </div>
      </body>
    </html>
  );
}
