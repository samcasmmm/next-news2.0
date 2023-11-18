import * as React from 'react';

import { cn } from '@/utils/classVariant';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  parentClassName?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, parentClassName, type, icon, ...props }, ref) => {
    const containerClasses = cn('relative', parentClassName);
    return (
      <div className={containerClasses}>
        <input
          type={type}
          className={cn(
            'pl-10 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50',
            className
          )}
          ref={ref}
          {...props}
        />
        {icon && (
          <span className='absolute inset-y-0 right-2 pl-3 flex items-center'>
            {icon}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
export { Input };
