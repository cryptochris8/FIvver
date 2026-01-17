import { type HTMLAttributes } from 'react';
import { clsx } from 'clsx';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'bordered' | 'elevated';
}

function Card({ className, variant = 'default', children, ...props }: CardProps) {
  return (
    <div
      className={clsx(
        'rounded-2xl bg-white p-6 transition-all duration-300',
        {
          'border border-secondary-200': variant === 'default' || variant === 'bordered',
          'shadow-xl shadow-secondary-900/5 hover:shadow-2xl hover:shadow-secondary-900/10': variant === 'elevated',
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export { Card, type CardProps };
