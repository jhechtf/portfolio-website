import { JSX } from 'preact';
import { tw } from 'twind';

interface PlaceholderProps extends JSX.HTMLAttributes<HTMLDivElement> {
  width: number | string;
  height: number | string;
  rounded?: boolean;
}

export function optionToStyleValue(value: number | string): string {
  if (typeof value === 'number') {
    return value <= 1 ? `${(value * 100).toFixed(2)}%` : `${value}px`;
  }
  return value;
}

export default function Placeholder({
  height = 1,
  width = 1,
  style = {},
  rounded = true,
  className = 'bg-gray-400',
  ...rest
}: PlaceholderProps) {
  return (
    <div
      {...rest}
      className={tw(
        'animate-pulse box-border',
        { ['rounded-full']: rounded },
        className,
      )}
      style={Object.assign(style, {
        height: optionToStyleValue(height),
        width: optionToStyleValue(width),
      })}
    />
  );
}
