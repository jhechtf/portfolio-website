import { tw } from 'twind';
import { useEffect, useState } from 'preact/hooks';
import Header from '../components/Header/header.component.tsx';
import BlogPost, { BlogItem } from '../components/BlogPost/blogPost.component.tsx';

export interface BlogPost {
  type_of: 'article';
  id: number;
  title: string;
  description: string;
  url: string;
  published_timestamp: string;
  reading_time_minutes: number;
}

export default function BlogPosts() {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    fetch('https://dev.to/api/articles?username=jhechtf')
      .then((res) => {
        if (res.ok) return res.json();
        else throw Error(res.status.toString());
      })
      .then((posts) => setPosts(posts))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      {posts.map((post, i) => (
        <div
          key={`blog-post-${post.id}`}
          className={tw(`font-semibold text-gray-700`, { 'my-4': i > 0 })}
        >
          <Header level={3} tag="header">
            {post.title}
          </Header>
          <section>
            {post.description}
          </section>
        </div>
      ))}
    </div>
  );
}
