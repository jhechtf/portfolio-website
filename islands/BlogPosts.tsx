import { tw } from 'twind';
import { useState, useEffect } from 'preact/hooks';

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
      .then(res => {
        if (res.ok) return res.json()
        else throw Error(res.status.toString());
      })
      .then(posts => setPosts(posts))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      {
        posts.map((post, i) => (
          <div
            key={`blog-post-${post.id}`}
            className={tw(`font-semibold text-gray-700`, { 'my-4': i > 0 })}
          >
            <header>
              <a href={post.url}>
                {post.title}
              </a>
            </header>

            {post.description}
          </div>
        ))
      }
    </div>
  )
}