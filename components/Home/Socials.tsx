'use client';

import useScreenSize from '@/hooks/useScreenSize';
import SocialsIcons from '@/components/Home/SocialsIcons';
import SocialsText from '@/components/Home/SocialsText';

export default function Socials() {
  const { width } = useScreenSize();

  return (
    <div className='w-full md:flex md:justify-end'>
      {width > 768 ? <SocialsIcons /> : <SocialsText />}
    </div>
  );
}
