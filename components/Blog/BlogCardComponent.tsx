import { BlogCard } from '@/app/lib/interface';
import { urlFor } from '@/app/lib/sanity';
import Image from 'next/image';
import Link from 'next/link';

export default function BlogCardComponent({
  post,
  idx,
}: {
  post: BlogCard;
  idx: number;
}) {
  return (
    <Link
      key={idx}
      href={`/${post.slug}`}
      className='flex flex-col h-58 rounded-lg border-1 border-[#4b5563] overflow-hidden group md:duration-300'
    >
      <div className='h-40 lg:h-56 overflow-hidden'>
        <Image
          className='h-full md:group-hover:scale-110 md:duration-300'
          src={urlFor(post.coverImage).url()}
          alt={post.title}
          width={1000}
          height={500}
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className='flex flex-col flex-grow p-2 lg:p-4 md:group-hover:bg-primary md:duration-300'>
        <p className='text-xs lg:text-base mb-1 lg:mb-2 text-primary md:group-hover:text-white md:duration-300'>
          {post.postedAt}
        </p>
        <h2 className='font-bold text-base lg:text-2xl mb-1 lg:mb-2'>
          {post.title}
        </h2>
      </div>
    </Link>
  );
}
