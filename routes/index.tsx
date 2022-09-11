import Counter from "../islands/Counter.tsx";
import { Head, asset } from '$fresh/runtime.ts';

export default function Home() {
  return (
    <div class="bg-green-300 dark:bg-green-600 dark:text-gray-100 h-full">
      {/* Basic Header information including title */}
      <Head>
        <title>Jim Burbridge &ndash; Home</title>
        <link href={asset('/base.css')} rel="stylesheet" />
      </Head>
      <header className="p-10">
        <h1 class="font-sans text-3xl font-bold text-gray-700 dark:text-gray-200">
          Jim Burbridge
        </h1>
        <h2 class="font-sans text-xl font-semibold text-gray-600 dark:text-gray-300">
          Certified Front-End Wizard
        </h2>
      </header>
    </div>
  );
}
