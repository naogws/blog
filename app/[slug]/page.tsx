import { BlogPost } from '@/app/lib/interface';
import { getPostBySlug } from '@/components/Blog/getPost';
import { PortableText } from '@portabletext/react';
import { PortableTextComponent } from '@/components/Blog/PortableTextComponent';
import { urlFor } from '@/app/lib/sanity';
import Link from 'next/link';

export const fetchCache = 'force-no-store';

export default async function BlogPostComponent({
  params,
}: {
  params: { slug: string };
}) {
  const post: BlogPost = await getPostBySlug(params.slug);

  return (
    <div className='flex flex-col space-y-12 mb-12'>
      <Link href='/' className='desktop-only underline lg:hover:text-highlight'>
        &lt; HOME
      </Link>
      <div className='space-y-8'>
        <h1 className='text-3xl lg:text-5xl font-bold'>{post.title}</h1>
        <p className='md:text-lg text-gray-400 italic'>{post.description}</p>
      </div>
      <hr className='opacity-25' />
      <div className='w-full h-60 md:h-[35rem] overflow-hidden rounded-lg'>
        <img
          src={urlFor(post.coverImage).url()}
          alt='Cover Image'
          className='rounded-lg w-full h-full object-cover'
        />
      </div>
      <div className='w-full md:flex md:justify-center'>
        <div className='max-w-none md:max-w-[48rem] w-full prose prose-invert lg:prose-lg lg:hover:prose-a:text-highlight prose-img:rounded-lg'>
          <hr className='desktop-only w-full my-12' />
          <PortableText
            value={post.content}
            components={PortableTextComponent}
          />
        </div>
      </div>
    </div>
  );
}
