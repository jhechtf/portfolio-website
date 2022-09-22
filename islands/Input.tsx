import { tw } from 'twind';
import { JSX } from 'preact';
import { forwardRef } from 'preact/compat';

export interface InputProps extends JSX.HTMLAttributes<HTMLInputElement> {}

export default forwardRef<HTMLInputElement, InputProps>(
  ({ className = '', ...rest }, ref) => {
    return (
      <input
        {...rest}
        className={tw(
          className,
          'focus:border-green-200 border rounded outline-none py-1 px-3',
        )}
        ref={ref}
      />
    );
  },
);
