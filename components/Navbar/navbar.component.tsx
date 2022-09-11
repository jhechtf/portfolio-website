import {

} from '$fresh/runtime.ts';
import {
  apply, tw
} from 'twind';

const wrapper = apply`mx-auto max-w-screen-xl flex`

export default function Navbar() {
  return (
    <nav className='py-4 px-5 border-b'>
      <div className={tw`${wrapper}`}>
        {/* Brand info */}
        <a href="/" className="font-semibold">
          Jim Burbridge
        </a>

        {/* Links */}
        <div className="ml-auto flex gap-10">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/resume">Resume</a>
        </div>
      </div>
    </nav>
  );
}