'use client';

import { useEffect, useMemo, useState } from 'react';
import useScreenSize from '@/hooks/useScreenSize';

const formatDateTime = (date: Date, width: number): string => {
  const day = date.getDate().toString().padStart(2, '0');
  const month = date.toLocaleString('en-US', { month: 'long' });
  const year = date.getFullYear();
  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: '2-digit',
    minute: '2-digit',
    second: width > 768 ? '2-digit' : undefined,
    hour12: true,
    timeZone: 'Asia/Jakarta',
    timeZoneName: width > 768 ? 'short' : undefined,
  };
  const time = date.toLocaleString('en-US', timeOptions);

  return width > 768
    ? `${day} ${month} ${year} - ${time}`
    : `${day} ${month} - ${time}`;
};

export default function DateTime() {
  const [currentDateTime, setCurrentDateTime] = useState<Date>(new Date());
  const { width } = useScreenSize();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const formattedDateTime = useMemo(
    () => formatDateTime(currentDateTime, width),
    [currentDateTime, width],
  );

  return <div>{formattedDateTime.toUpperCase()}</div>;
}
