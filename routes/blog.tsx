import BlogPosts from '../islands/BlogPosts.tsx';
import { Head } from '$fresh/runtime.ts';
import Header from '../components/Header/header.component.tsx';

export default function Blog() {
  return (
    <div className='mt-10 container mx-auto'>
      <Head>
        <title>Jim Burbridge &ndash; Blog</title>
      </Head>
      <Header className="mb-4" level={1}>Recent Articles</Header>
      <BlogPosts />
    </div>
  );
}
