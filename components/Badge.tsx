import { ComponentChildren } from 'preact';

interface BadgeProps {
  children: ComponentChildren;
}

export default function Badge({ children }: BadgeProps) {
  return (
    <div className='rounded-full bg-gray-300 dark:bg-gray-800 dark:text-gray-200 inline py-1 px-2 text-xs'>
      {children}
    </div>
  );
}
