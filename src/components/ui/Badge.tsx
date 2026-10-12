import * as React from 'react';
import { cn } from './utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'success' | 'warning' | 'info';
}

export function Badge({ className, variant = 'default', ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex min-h-6 items-center gap-1.5 rounded-pill border px-2.5 py-0.5 text-xs font-medium leading-4',
        {
          'border-hairline bg-white text-body-strong': variant === 'default',
          'border-green/15 bg-green-soft text-green': variant === 'success',
          'border-gold-border bg-gold-soft text-gold-ink': variant === 'warning',
          'border-ink/10 bg-info-soft text-ink': variant === 'info',
        },
        className
      )}
      {...props}
    />
  );
}
