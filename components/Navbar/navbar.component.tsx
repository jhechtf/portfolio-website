import {} from '$fresh/runtime.ts';
import { apply, tw } from 'twind';

const wrapper = apply`mx-auto max-w-screen-xl flex`;

export const handler = () => {
  return true;
};

export default function Navbar() {
  return (
    <nav className='py-4 px-5 bg-green-400 dark:bg-green-900 dark:text-gray-100 sticky top-0'>
      <div className={tw`${wrapper}`}>
        {/* Brand info */}
        <a href='/' className='font-semibold'>
          Jim Burbridge
        </a>

        {/* Links */}
        <div className='ml-auto flex gap-10'>
          <a href='/'>Home</a>
          <a href='/about'>About</a>
          <a href='/resume'>Resume</a>
        </div>
      </div>
    </nav>
  );
}
