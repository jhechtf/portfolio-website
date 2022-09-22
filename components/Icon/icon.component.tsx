import * as MdiJs from '@mdi/js';

export type IconName = keyof typeof MdiJs;

export interface IconProps {
  color?: string;
  size?: number | string;
  path?: string;
  iconName?: IconName;
}

export default function Icon(props: IconProps) {
  let path = '';
  if (props.iconName && MdiJs[props.iconName]) {
    path = MdiJs[props.iconName];
  } else if (props.path) {
    path = props.path;
  } else {
    return null;
  }

  const sizeProp = props.size;

  const size = {
    height: '',
    width: '',
  };

  if (typeof sizeProp === 'number') {
    size.height = `${sizeProp}rem`;
    size.width = size.height;
  }

  return (
    <svg viewBox='0 0 24 24' style={{ ...size, lineHeight: `${size}rem` }}>
      <path d={path} fill={props.color || 'black'} />
    </svg>
  );
}
