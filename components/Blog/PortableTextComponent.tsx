import Image from 'next/image';
import { urlFor } from '@/app/lib/sanity';

export const PortableTextComponent = {
  types: {
    code: ({ value }: any) => (
      <pre className='p-4 rounded-md bg-gray-800 text-white'>
        <p className='text-primary font-mono'>{value.filename}</p>
        <code className='block whitespace-pre overflow-x-auto'>
          {value.code}
        </code>
      </pre>
    ),
    image: ({ value }: any) => (
      <div>
        <Image
          className='rounded-md'
          src={urlFor(value.asset._ref).url()}
          alt={value.alt}
          width={2000}
          height={1000}
        />
      </div>
    ),
  },
};
