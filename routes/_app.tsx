import { AppProps } from '$fresh/server.ts';
import { asset, Head } from '$fresh/runtime.ts';
import Navbar from '../components/Navbar/navbar.component.tsx';
import Command from '../islands/Command.tsx';

export default function Layout({
  Component,
}: AppProps) {
  return (
    <div className='flex flex-col h-full'>
      <Head>
        <link rel='stylesheet' href={asset('/base.css')} />
      </Head>
      <Command />

      {/* Global Navbar */}
      <Navbar />

      {/* Main Container */}
      <div className='flex-grow'>
        <Component />
      </div>

      {/* Page Footer */}
      <footer className='flex-shrink-0 h-[min-content] bg-gray-900 text-gray-100 p-4'>
        <div className='mx-auto max-w-screen-xl'>
          <div className='text-center'>
            &copy; Jim Burbridge 2022
          </div>
        </div>
      </footer>
    </div>
  );
}
