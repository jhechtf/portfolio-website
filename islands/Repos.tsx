import { useEffect, useState } from 'preact/hooks';

import { Octokit } from 'https://cdn.skypack.dev/@octokit/rest';
import Placeholder from '../components/Placeholder/placeholder.component.tsx';
import Badge from '../components/Badge.tsx';
import Icon from '../components/Icon/icon.component.tsx';
import Card from '../components/Card/card.component.tsx';

const kit = new Octokit();

const GITLAB_URL =
  'https://gitlab.com/api/v4/users/jhechtf/projects?order_by=last_activity_at&sort=desc';

export interface BaseRepo {
  id: number;
  name: string;
  description: string;
  topics: string[];
}

export interface GithubRepo extends BaseRepo {
  open_issues: number;
  html_link: string;
}

export interface GitlabRepo extends BaseRepo {
  web_url: string;
}

export default function Repos() {
  const [isLoading, setLoading] = useState(true);
  const [githubRepos, setGithubRepos] = useState<GithubRepo[]>([]);
  const [gitlabRepos, setGitlabRepos] = useState<GitlabRepo[]>([]);

  useEffect(() => {
    // deno-lint-ignore no-explicit-any
    (kit as any).rest.repos.listForUser({
      username: 'jhechtf',
      sort: 'pushed',
    })
      .then((res: { data: GithubRepo[] }) => {
        setGithubRepos(res.data.slice(0, 5));
      })
      .catch(console.error)
      .finally(() => setLoading(false));

    fetch(GITLAB_URL)
      .then((res) => {
        if (res.ok) return res.json();
        throw new Error(res.statusText);
      })
      .then((res) => setGitlabRepos((res as GitlabRepo[]).slice(0, 5)))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <div className='grid gap-4 xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1'>
        {isLoading &&
          (
            <Card
              header={
                <div className='flex gap-4 pb-3 items-center'>
                  <Placeholder
                    className='bg-black'
                    height='1.25rem'
                    width='1.25rem'
                  />
                  <Placeholder
                    className='bg-gray-800'
                    width={0.75}
                    height='1em'
                  />
                  <Placeholder
                    className='bg-gray-800'
                    width={'4em'}
                    height='1em'
                  />
                </div>
              }
              footer={
                <section>
                  <a href='border rounded hover:bg-gray-300 p-2 underline text-blue-500 '>
                    <Placeholder width='80px' height='1em' />
                  </a>
                </section>
              }
            >
              <Placeholder width={1} height='1em' />
              <Placeholder
                className='dark:bg-green-600 bg-green-400 mt-3'
                width='3em'
                height='1.25em'
              />
            </Card>
          )}
        {githubRepos.length > 0 && githubRepos.map((repo) => {
          return (
            <Card
              key={`github-repo-${repo.name}`}
              header={
                <div className='flex flex-col gap-2 dark:text-gray-700'>
                  <div className='flex gap-4'>
                    <div>
                      <Icon iconName='mdiGithub' size={1.5} />
                    </div>
                    <div>
                      {repo.name}
                    </div>
                    <Badge>
                      {repo.open_issues} Issues
                    </Badge>
                  </div>
                  <div className='text-gray-500'>
                    {repo.description || 'No description given'}
                  </div>
                </div>
              }
              footer={
                <a
                  href={repo.html_link}
                  className='border rounded hover:bg-gray-300 p-2 underline text-blue-500 hover:text-blue-400 dark:text-blue-400 dark:hover:text-blue-500'
                >
                  View Repo
                </a>
              }
            >
              <section className='flex gap-2 mt-2 flex-wrap'>
                {repo.topics.map((t: string) => (
                  <div className='py-1 px-2 bg-green-400 rounded-lg text-gray-50'>
                    <a
                      href={`https://github.com/topics/${encodeURIComponent(t)
                        }`}
                      target='_blank'
                    >
                      {t}
                    </a>
                  </div>
                ))}
              </section>
            </Card>
          );
        })}
        {gitlabRepos.length > 0 &&
          gitlabRepos.map((repo) => (
            <Card
              key={`gitlab-repo-${repo.id}`}
              header={
                <div className='flex flex-col gap-2 dark:text-gray-700'>
                  <div className='flex gap-4'>
                    <div>
                      <Icon iconName='mdiGitlab' size={1.5} />
                    </div>
                    <div>
                      {repo.name}
                    </div>
                  </div>
                  <div className='text-gray-500'>
                    {repo.description || 'No description given'}
                  </div>
                </div>
              }
              footer={
                <a
                  href={repo.web_url}
                  target='_blank'
                  className='border rounded hover:bg-gray-300 p-2 underline text-blue-500 hover:text-blue-400 dark:text-blue-400 dark:hover:text-blue-500'
                >
                  View Repo
                </a>
              }
            >
              <section className='flex gap-2 mt-2 flex-wrap'>
                {repo.topics.map((t: string) => (
                  <div className='py-1 px-2 bg-green-400 rounded-lg text-gray-50'>
                    <a
                      href={`https://gitlab.com/explore/projects/topics/${encodeURIComponent(t)
                        }`}
                      target='_blank'
                    >
                      {t}
                    </a>
                  </div>
                ))}
              </section>
            </Card>
          ))}
      </div>
    </div>
  );
}
