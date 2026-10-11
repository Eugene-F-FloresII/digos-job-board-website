import * as React from 'react';
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    variant?: 'default' | 'success' | 'warning' | 'info';
}
export declare function Badge({ className, variant, ...props }: BadgeProps): React.JSX.Element;
