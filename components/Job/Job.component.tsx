import { ComponentChild } from 'preact';
import { tw } from 'twind';

export interface JobProps {
  company: string;
  title: string;
  location?: string;
  start: string;
  end?: string;
  notes?: ComponentChild | string | string[];
  className?: string;
}

export default function Job({
  company,
  title,
  start,
  end,
  notes,
  location = 'Remote',
  className = '',
}: JobProps) {
  return (
    <article
      className={tw('border rounded-[8px] p-5 dark:bg-gray-300', className)}
    >
      <header className='font-semibold text-gray-700'>
        <h2 className='text-lg'>
          <span className='text-green-700'>
            {company}
          </span>
          <small className='ml-4 text-gray-500'>{location}</small>
        </h2>
        <h3 className='italic'>
          {title}
        </h3>
        <p className='font-normal'>
          {start} to {end ? end : 'Current'}
        </p>
      </header>
      <section className='mt-3'>
        {typeof notes === 'string' || Array.isArray(notes)
          ? (
            <ol className='pl-6 list-decimal'>
              {Array.isArray(notes)
                ? notes.map((note) => <li key={`note-${note}`}>{note}</li>)
                : <li>{notes}</li>}
            </ol>
          )
          : notes}
      </section>
    </article>
  );
}
