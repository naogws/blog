import { BlogCard } from '@/app/lib/interface';
import getPost from '@/app/lib/getPost';
import BlogCardComponent from '@/components/Blog/BlogCardComponent';

export default async function BlogLayout() {
  const data: BlogCard[] = await getPost();

  if (!data) {
    return <h1>No post found!</h1>;
  }

  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
      {data.map((post, idx) => (
        <BlogCardComponent key={idx} post={post} idx={idx} />
      ))}
    </div>
  );
}
