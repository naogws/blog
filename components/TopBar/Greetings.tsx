'use client';

import { useMemo } from 'react';
import useScreenSize from '@/hooks/useScreenSize';

export default function Greetings() {
  const { width } = useScreenSize();
  const currentHour = new Date().getHours();

  const { greeting, kaomoji } = useMemo(() => {
    if (currentHour < 12) {
      return { greeting: 'GOOD MORNING!', kaomoji: '( ´ ω `)' };
    } else if (currentHour < 18) {
      return { greeting: 'GOOD AFTERNOON!', kaomoji: '(｡•̀ᴗ-)✧' };
    } else {
      return { greeting: 'GOOD EVENING!', kaomoji: '(｡･ω･｡)ﾉ♡' };
    }
  }, [currentHour]);

  return (
    <div>
      {greeting} {width > 768 && kaomoji}
    </div>
  );
}
