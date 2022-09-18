import { ComponentChildren, h } from 'preact';
import { tw } from 'twind';

export type LevelValues = 1 | 2 | 3 | 4 | 5;

export interface HeaderProps {
  children: ComponentChildren;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'header';
  level?: LevelValues;
  className?: string;
}

export const classMap: Record<LevelValues, string> = {
  1: 'text-4xl font-bold text-gray-700',
  2: 'text-3xl font-semibold text-gray-600',
  3: 'text-xl font-bold text-gray-700 dark:text-gray-200',
  4: 'text-lg font-bold underline text-gray-700',
  5: 'font-semibold text-gray-600',
};

export default function Header(
  { children, tag = 'h1', level = 1, className = '' }: HeaderProps,
) {
  return (
    h(tag, {
      className: tw(classMap[level], className),
    }, children)
  );
}
