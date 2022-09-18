import BlogPosts from '../islands/BlogPosts.tsx';
import { Head } from '$fresh/runtime.ts';

export default function Blog() {
  return (
    <div className='mt-10 container mx-auto'>
      <Head>
        <title>Jim Burbridge &ndash; Blog</title>
      </Head>
      <h1 className='text-2xl font-bold font-sans mb-8'>Recent Articles</h1>
      <BlogPosts />
    </div>
  );
}
