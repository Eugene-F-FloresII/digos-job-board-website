import * as React from 'react';
import { cn } from './utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', type = 'button', ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        className={cn(
          'inline-flex min-h-11 items-center justify-center gap-2 rounded-control font-medium transition duration-150 ease-standard active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green disabled:pointer-events-none disabled:opacity-40',
          {
            'bg-ink text-white hover:bg-green': variant === 'primary',
            'border border-hairline bg-white text-ink hover:border-green/40 hover:bg-green-soft': variant === 'outline',
            'bg-transparent text-body hover:bg-green-soft hover:text-ink': variant === 'ghost',
            'px-3 text-sm': size === 'sm',
            'px-4 text-sm': size === 'md',
            'min-h-12 px-5 text-base': size === 'lg',
          },
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';
