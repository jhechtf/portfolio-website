import { css, tw } from 'twind/css';
import Header from '../components/Header/header.component.tsx';
import Job from '../components/Job/Job.component.tsx';
import { Head } from '$fresh/runtime.ts';

const resume = css();

export default function ResumeRoute() {
  return (
    <div className='dark:bg-gray-800'>
      <Head>
        <title>Jim Burbridge &ndash; Resume</title>
      </Head>

      <div className={tw(resume, 'container mx-auto pb-6 pt-10')}>
        <header>
          <h1 className='text-3xl font-bold font-sans dark:text-green-400 text-green-600 underline'>
            Jim Burbridge
          </h1>
          <h2 className='text-2xl text-gray-600 dark:text-gray-50 font-semibold font-sans'>
            Front-End Engineer / DevOps / Cloud Wizard / Overall Nerd / Goat
            Lord
          </h2>
          <h3 className='text-lg text-gray-600 dark:text-gray-300 font-sans'>
            <span className='font-semibold'>Willing to Relocate</span>:{' '}
            <span className='text-underline'>No</span>
          </h3>
        </header>
        <section className='mt-6'>
          <div className='flex'>
            <main className='w-3/5'>
              <Header className='uppercase mb-4' level={3}>
                Work Experience
              </Header>

              <Job
                company='FullStory'
                title='Senior Software Engineer'
                start='2022'
                notes={[
                  'Responsible for development and upkeep of internal tooling used in access management.',
                  'Designed, planned, and developed updates to the main pages of our directory tool;  includes a navbar refresh that allows a user to search by team name, a profile update to better highlight a user\'s internal accomplishments, and an ability to search in-page on members of a team.',
                ]}
              />

              <Job
                company='Amazon'
                title='Front-End Engineer'
                start='2020'
                end='2022'
                className='mt-5'
                notes={[
                  `Responsible for feature development, planning, bug fixing,
                      code quality, delegation, and overall direction of the
                      front-end codebase`,
                  `Brought asset bundle size down from 80% and implemented
                      better behavior for caching.`,
                  `Worked to bring asset deployment to full CI/CD, including
                      unit and integration tests as well as automated rollback
                      upon failure. Increased unit coverage by 45%.`,
                ]}
              />

              <Job
                className='mt-5'
                company='Apkudo'
                title='Senior Front-End Engineer'
                start='2019'
                end='2020'
                notes={[
                  `Worked on new UI features and updates for current
                      customers as well as building an updated UI for the
                      company's unified platform. This involved multiple
                      meetings between back-end engineering, requirement
                      document reviews, as well as documentation changes for
                      existing customer-facing documents.`,
                  `Lead initiative to document front-end code base, starting
                      with shared modules between clients.`,
                  `Converted legacy UI to modern company libraries and
                      standards. This involved a move from CoffeeScript to
                      React, as well as setting up an express server with an
                      included server-side renderer, as well as utilizing an
                      automated CHANGELOG generator.`,
                ]}
              />

              <Job
                className='mt-5'
                company='LQ Digital'
                title='Front-End Engineer / DevOps Engineer'
                start='2017'
                end='2020'
                notes={[
                  `Automate  build pipelines for all company-owned properties using a combination of AWS (Elastic Beanstalk, Aurora Postgres, Elasticache Redis, etc.), Gitlab-CI, and Docker.`,
                  `Created AWS Architecture for company-acquired property that was originally hosted on Heroku, saving approximately $3,000 per month in server costs. This included 2 production environments, a staging environment, and a worker environment.`,
                  `Brought mobile load time for a client’s website from 6-9  seconds down to 3 seconds on 3G internet using features such as deferred/async loading, enabling HTTP/2, and prefetching the styles needed for any initially on-screen elements.`,
                ]}
              />
            </main>
            <aside className='pl-6'>
              <section>
                <Header className='uppercase mb-3' tag='h2' level={3}>
                  Education
                </Header>
                <section className='mb-5'>
                  <span className='font-bold dark:text-green-400 text-green-700'>
                    B.S. Mathematics
                  </span>
                  <span className='ml-4 dark:text-gray-100'>CSU East Bay</span>
                </section>
              </section>
              <section>
                <Header className='uppercase' level={3} tag='header'>
                  Languages
                </Header>
                <section className='text-gray-700 dark:text-gray-300'>
                  <ul>
                    <li>
                      English <small>Native</small>
                    </li>
                    <li>
                      Spanish <small>Fluent</small>
                    </li>
                    <li>
                      German <small>Conversational</small>
                    </li>
                  </ul>
                </section>
              </section>
              <section className='mt-5'>
                <Header className='uppercase mb-3' level={3} tag='header'>
                  Socials
                </Header>
                <section className='dark:text-gray-300'>
                  <ul>
                    <li>
                      <a
                        href='https://gitlab.com/jhechtf/'
                        className='hover:text-blue-400'
                        target='_blank'
                      >
                        GitLab
                      </a>
                    </li>
                    <li>
                      <a
                        href='https://github.com/jhechtf'
                        target='_blank'
                        className='hover:text-blue-400'
                      >
                        GitHub
                      </a>
                    </li>
                    <li>
                      <a
                        href='https://stackoverflow.com/users/2825551/jhecht'
                        className='hover:text-blue-400'
                        target='_blank'
                      >
                        StackOverflow
                      </a>
                    </li>
                    <li>
                      <a
                        href='https://dev.to/jhechtf'
                        target='_blank'
                        className='hover:text-blue-400'
                      >
                        Dev.To
                      </a>
                    </li>
                  </ul>
                </section>
              </section>
            </aside>
          </div>
        </section>
      </div>
    </div>
  );
}
