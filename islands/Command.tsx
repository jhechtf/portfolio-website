import { tw } from 'twind';
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'preact/hooks';
import Icon from '../components/Icon/icon.component.tsx';
import Input from './Input.tsx';

interface CommandDefinition {
  type: 'url';
  url: string;
  title: string;
  description: string;
}

export default function Command() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [commands, setCommands] = useState<CommandDefinition[]>([]);
  const [highlight, setHighlight] = useState(-1);
  const ref = useRef<HTMLInputElement>(null);

  // Keyboard event listener
  useEffect(() => {
    const fn = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;

      if (e.key === 'Escape') {
        setSearch('');
        setHighlight(-1);
        setOpen(false);
      }

      if (!target.matches('textarea,input')) {
        if (e.key === 'k' && e.ctrlKey) {
          e.stopPropagation();
          e.preventDefault();
          setOpen((v) => !v);
        }
      }
    };

    document.body.addEventListener('keydown', fn);

    return () => {
      document.body.removeEventListener('keydown', fn);
    };
  }, [open]);

  useLayoutEffect(() => {
    if (ref.current && open) ref.current.focus();
  }, [open, ref]);

  // Load data
  useEffect(() => {
    fetch('/commands.json')
      .then((res) => {
        if (res.ok) return res.json();
        else throw res.statusText;
      })
      .then((data: { commands: CommandDefinition[] }) => {
        setCommands(data.commands);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    setHighlight(-1);
  }, [search]);

  const handleCommandSelect = useCallback((e: CommandDefinition) => {
    console.info('HELLO', e);
    if (e.type === 'url') {
      console.info('whats up???');
      location.href = e.url;
    }
  }, [commands]);

  const filtered = useMemo(() =>
    commands.filter((command) => {
      const lower = search.toLowerCase();
      if (search === '') return true;
      return command.title.toLowerCase().includes(lower) ||
        command.description.toLowerCase().includes(lower);
    }), [search, commands]);

  return (
    <div
      className={tw(
        'flex flex-col items-center justify-center bg-[#0004] fixed top-0 left-0 right-0 bottom-0 z-50',
        { ['hidden']: !open },
      )}
    >
      <div className='container mx-auto bg-gray-100 dark:bg-gray-300 px-10 py-4 rounded-lg'>
        <header>
          <Input
            ref={ref}
            tabIndex={1}
            placeholder='Search for a command here...'
            value={search}
            className='w-full font-mono'
            onChange={(e) => {
              const target = e.target as HTMLInputElement;
              setSearch(target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === 'Escape' || e.key === 'k' && e.ctrlKey) {
                e.preventDefault();
                e.stopPropagation();
                setSearch('');
                setHighlight(-1);
                setOpen(false);
              }
              if (['ArrowDown', 'ArrowUp'].includes(e.key)) {
                e.stopPropagation();
                e.preventDefault();
                if (e.key === 'ArrowDown') {setHighlight((v) =>
                    (v + 1) % filtered.length
                  );}
                if (e.key === 'ArrowUp') {setHighlight((v) =>
                    v - 1 < 0 ? filtered.length - 1 : v - 1
                  );}
              }
              if (
                e.key === 'Enter' && highlight !== -1 && filtered[highlight]
              ) {
                handleCommandSelect(filtered[highlight]);
              }
            }}
          />
        </header>
        <section className='mt-3 border-t pt-3 max-h-[300px] overflow-auto'>
          {commands.length === 0 && 'Loading'}
          {filtered.length !== 0 &&
            filtered.map((command, i) => (
              <div
                className={tw(
                  'flex rounded cursor-pointer gap-4 p-1 hover:bg-gray-400',
                  { 'mt-2': i !== 0, 'bg-gray-400': highlight === i },
                )}
                key={`command-${command.type}-${command.title}`}
                onMouseOut={() => setHighlight((v) => v === i ? -1 : v)}
                onClick={(e) => {
                  handleCommandSelect(command);
                  setOpen(false);
                  setHighlight(-1);
                  setSearch('');
                }}
              >
                {/* Left Side */}
                <div className='pt-1'>
                  <Icon iconName='mdiLink' size={1.25} />
                </div>
                {/* Right Side */}
                <div>
                  <div className='font-semibold text-lg'>
                    {command.title}
                  </div>
                  <div className='text-gray-500'>
                    {command.description}
                  </div>
                </div>
              </div>
            ))}
          {commands.length !== 0 && filtered.length === 0 &&
            (
              <div>
                No Results Found
              </div>
            )}
        </section>
      </div>
    </div>
  );
}
