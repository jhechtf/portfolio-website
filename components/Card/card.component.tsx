import { ComponentChild, ComponentChildren } from 'preact';

export interface CardProps {
  header?: ComponentChild;
  children: ComponentChildren;
  footer?: ComponentChild;
}

export default function Card({
  header,
  children,
  footer,
}: CardProps) {
  return (
    <div className='my-2 flex flex-col flex-grow border dark:border-gray-200 p-4 rounded-lg shadow-lg bg-gray-200 text-gray-600'>
      {header &&
        (
          <header className='font-semibold gap-2 dark:text-gray-700'>
            {header}
          </header>
        )}

      <section className='flex-grow'>
        {children}
      </section>

      {footer &&
        (
          <footer className='mt-4 border-t border-gray-400 pt-3'>
            {footer}
          </footer>
        )}
    </div>
  );
}
