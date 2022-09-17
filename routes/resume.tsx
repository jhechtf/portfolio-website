import { css, tw } from 'twind/css';

const resume = css();

export default function ResumeRoute() {
  return (
    <div className={tw(resume, 'container mx-auto mt-10 mb-6')}>
      <header>
        <h1 className="text-3xl text-gray-700 font-bold font-sans text-green-600 underline">
          Jim Burbridge
        </h1>
        <h2 className="text-2xl text-gray-600 font-semibold font-sans">
          Front-End Engineer / DevOps / Cloud Wizard / Overall Nerd
        </h2>
        <h3 className="text-lg text-gray-600 font-sans">
          <span className="font-semibold">Willing to Relocate</span>:
          {' '}
          <span className="text-underline">No</span>
        </h3>
      </header>

      <section className="mt-10">


        <div className="flex">
          <main className="w-3/5">
            <h2 className="mb-3 font-bold uppercase text-gray-700 text-lg">
              Work Experience
            </h2>
            <article className="border rounded-[8px] p-5">
              <header className="font-semibold text-gray-700">
                <h2 className="text-lg">
                  <span className="text-green-700">
                    FullStory,Inc.
                  </span>
                  <small className="ml-4 text-gray-500">Remote</small>
                </h2>
                <h3 className="italic">
                  Senior Software Engineer
                </h3>
                <p className="font-normal">
                  May 2022 to Current
                </p>
              </header>
              <section className="mt-3">
                <ol className="list-decimal pl-6">
                  <li>Responsible for development and upkeep of internal tooling used in access management.</li>
                  <li>Designed, planned, and developed updates to the main pages of our directory tool;  includes a navbar refresh that allows a user to search by team name, a profile update to better highlight a user’s internal accomplishments, and an ability to search in-page on members of a team.</li>
                </ol>
              </section>
            </article>
            <article className="border rounded-[8px] p-5 mt-4">
              <header className="font-semibold text-gray-700">
                <h2 className="text-lg">
                  <span className="text-green-700">
                    Amazon
                  </span>
                  <small className="ml-4 text-gray-500">Remote</small>
                </h2>
                <h3 className="italic">
                  Front-End Engineer
                </h3>
                <p className="font-normal">
                  Sept 2020 to May 2022
                </p>
              </header>
              <section className="mt-3">
                <ol className="list-decimal pl-6">
                  <li>
                    Responsible for feature development, planning, bug fixing, code quality, delegation, and overall direction of the front-end codebase
                  </li>
                  <li>Brought asset bundle size down from 80% and implemented better behavior for caching.</li>
                  <li>
                    Worked to bring asset deployment to full CI/CD, including unit and integration tests as well as automated rollback upon failure. Increased unit coverage by 45%.
                  </li>
                </ol>
              </section>
            </article>
            <article className="border rounded-[8px] p-5 mt-4">
              <header className="font-semibold text-gray-700">
                <h2 className="text-lg">
                  <span className="text-green-700">
                    Apkudo
                  </span>
                  <small className="ml-4 text-gray-500">Remote</small>
                </h2>
                <h3 className="italic">
                  Senior Front-End Engineer
                </h3>
                <p className="font-normal">
                  June 2019 to April 2020
                </p>
              </header>
              <section className="mt-3">
                <ol className="list-decimal pl-6">
                  <li>
                    Worked on new UI features and updates for current customers as well as building an updated UI for the company’s unified platform. This involved multiple meetings between back-end engineering, requirement document reviews, as well as documentation changes for existing customer-facing documents.
                  </li>
                  <li>Lead initiative to document front-end code base, starting with shared modules between clients.s</li>
                  <li>
                    Converted legacy UI to modern company libraries and standards. This involved a move from CoffeeScript to React, as well as setting up an express server with an included server-side renderer, as well as utilizing an automated CHANGELOG generator.
                  </li>
                </ol>
              </section>
            </article>
            <article className="border rounded-[8px] p-5 mt-4">
              <header className="font-semibold text-gray-700">
                <h2 className="text-lg">
                  <span className="text-green-700">
                    LQ Digital
                  </span>
                  <small className="ml-4 text-gray-500">Oakland, CA / Remote</small>
                </h2>
                <h3 className="italic">
                  Front-End Engineer / DevOps
                </h3>
                <p className="font-normal">
                  Sept 2020 to May 2022
                </p>
              </header>
              <section className="mt-3">
                <ol className="list-decimal pl-6">
                  <li>
                    Responsible for the whole front-end process, including testing and e2e.
                  </li>
                  <li>Improved developer experience by switching to a faster build system.</li>
                </ol>
              </section>
            </article>
          </main>

          <aside className="pl-6 ">
            <h2 className="mb-3 font-bold uppercase text-gray-700 text-lg">
              Open Source Contributions
            </h2>

            ... Github??

          </aside>

        </div>
      </section>

    </div>
  );
}