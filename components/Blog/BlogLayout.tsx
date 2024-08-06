import { BlogCard } from '@/app/lib/interface';
import getPost from '@/components/Blog/getPost';
import BlogCardComponent from '@/components/Blog/BlogCardComponent';

export default async function BlogLayout() {
  const data: BlogCard[] = await getPost();

  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
      {data.map((post, idx) => (
        <BlogCardComponent key={idx} post={post} idx={idx} />
      ))}
    </div>
  );
}
