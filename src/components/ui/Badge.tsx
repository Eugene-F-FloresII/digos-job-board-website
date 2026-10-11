import * as React from 'react';
import { cn } from './utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'success' | 'warning' | 'info';
}

export function Badge({ className, variant = 'default', ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex min-h-6 items-center gap-1 rounded-pill border border-hairline px-2.5 py-0.5 text-xs font-medium leading-4',
        {
          'bg-surface text-body-strong': variant === 'default',
          'bg-surface text-ink': variant === 'success',
          'bg-transparent text-body-strong': variant === 'warning',
          'bg-transparent text-body': variant === 'info',
        },
        className
      )}
      {...props}
    />
  );
}
