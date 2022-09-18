import { css, tw } from 'twind/css';
import Header from '../components/Header/header.component.tsx';
import Job from '../components/Job/Job.component.tsx';

const resume = css();

export default function ResumeRoute() {
  return (
    <div className='dark:bg-gray-800'>
      <div className={tw(resume, 'container mx-auto pb-6 pt-10')}>
        <header>
          <h1 className='text-3xl text-gray-700 font-bold font-sans dark:text-green-400 text-green-600 underline'>
            Jim Burbridge
          </h1>
          <h2 className='text-2xl text-gray-600 dark:text-gray-50 font-semibold font-sans'>
            Front-End Engineer / DevOps / Cloud Wizard / Overall Nerd
          </h2>
          <h3 className='text-lg text-gray-600 dark:text-gray-300 font-sans'>
            <span className='font-semibold'>Willing to Relocate</span>:{' '}
            <span className='text-underline'>No</span>
          </h3>
        </header>
        <section className='mt-10'>
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
                  `Responsible for the whole front-end process, including
                      testing and e2e.`,
                  `Improved developer experience by switching to a faster
                      build system.`,
                ]}
              />
            </main>
            <aside className='pl-6 '>
              <section>
                <Header className='uppercase mb-3' tag='h2' level={3}>
                  Education
                </Header>
                <section className='mb-5'>
                  <span className='font-bold text-green-700'>
                    B.S. Mathematics
                  </span>
                  <span className='ml-4'>CSU East Bay</span>
                </section>
              </section>
            </aside>
          </div>
        </section>
      </div>
    </div>
  );
}
