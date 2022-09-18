import { asset, Head } from '$fresh/runtime.ts';
import Projects from '../islands/Repos.tsx';

export default function Home() {
  return (
    <div className='min-h-full flex flex-col'>
      {/* Basic Header information including title */}
      <Head>
        <title>Jim Burbridge &ndash; Home</title>
        <link href={asset('/base.css')} rel='stylesheet' />
      </Head>

      <div class='bg-green-400 dark:bg-green-600 dark:text-gray-100 h-full'>
        {/* Jimbotron */}
        <header className='p-10'>
          <h1 class='font-sans text-3xl font-bold text-gray-700 dark:text-gray-200'>
            Jim Burbridge
          </h1>
          <h2 class='font-sans text-xl font-semibold text-gray-600 dark:text-gray-300'>
            Certified Front-End Wizard
          </h2>
        </header>
      </div>

      <div className='px-10 flex-grow dark:bg-gray-800 bg-gray-50'>
        <h1 className='text-center my-6 text-3xl text-gray-700 font-semibold dark:text-gray-100'>
          Projects
        </h1>

        <Projects />
      </div>
    </div>
  );
}
