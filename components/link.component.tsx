import { JSX } from 'preact';
import { tw } from 'twind';
import { signal } from '@preact/signals';

export interface LinkProps extends JSX.HTMLAttributes<HTMLAnchorElement> {
  activeClass?: string;
}

export const routeSignal = signal('/');

export default function Link(
  { href, activeClass = '', children, className, ...rest }: LinkProps,
) {
  return (
    <a
      {...rest}
      className={tw(className, { [activeClass]: routeSignal.value === href })}
      href={href}
    >
      {children}
    </a>
  );
}
