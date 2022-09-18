import { useEffect, useState } from 'preact/hooks';

import { Octokit } from 'https://cdn.skypack.dev/@octokit/rest';
import Placeholder from '../components/Placeholder/placeholder.component.tsx';
import Badge from '../components/Badge.tsx';

const kit = new Octokit();

export default function Repos() {
  const [isLoading, setLoading] = useState(true);
  const [value, setValue] = useState([]);

  useEffect(() => {
    kit.rest.repos.listForUser({
      username: 'jhechtf',
      sort: 'pushed',
    })
      .then((res: any) => {
        setValue(res.data.slice(0, 5));
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <div className='flex gap-4'>
        {isLoading && (
          <div className='my-2 w-1/5 border p-4 rounded-lg'>
            <header className='font-semibold text-gray-700 dark:text-gray-400'>
              <div className='flex gap-2'>
                <Placeholder className='bg-black' height='1em' width='150px' />
                <Placeholder
                  style={{ display: 'inline-block' }}
                  height='1em'
                  width='1em'
                />
              </div>
            </header>
          </div>
        )}
        {value.map((repo: any) => {
          return (
            <div className='my-2 flex flex-col flex-grow border dark:border-gray-200 p-4 rounded-lg shadow-lg dark:bg-gray-700 bg-gray-200 text-gray-600'>
              <header className='font-semibold flex gap-2 dark:text-gray-700 flex-col'>
                <div className='flex gap-4'>
                  <div>
                    {repo.name}
                  </div>
                  <Badge>
                    {repo.open_issues} Issues
                  </Badge>
                </div>
                <section className='text-gray-500'>
                  {repo.description || 'No description given'}
                </section>
              </header>

              <section className='flex gap-2 mt-2 flex-wrap flex-grow'>
                {repo.topics.map((t: string) => (
                  <div className='py-1 px-2 bg-green-400 rounded-lg text-gray-50'>
                    <a href={`https://github.com/topics/${t}`} target='_blank'>
                      {t}
                    </a>
                  </div>
                ))}
              </section>

              <footer className='mt-4 border-t border-gray-400 pt-3'>
                <a
                  className='border rounded hover:bg-gray-300 p-2 underline text-blue-500 hover:text-blue-400 dark:text-blue-400 dark:hover:text-blue-500'
                  href={repo.html_link}
                >
                  View Repo
                </a>
              </footer>
            </div>
          );
        })}
      </div>
    </div>
  );
}
