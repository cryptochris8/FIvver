import { type HTMLAttributes } from 'react';
import { clsx } from 'clsx';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'bordered' | 'elevated';
}

function Card({ className, variant = 'default', children, ...props }: CardProps) {
  return (
    <div
      className={clsx(
        'rounded-xl bg-white p-6',
        {
          'border border-secondary-200': variant === 'default' || variant === 'bordered',
          'shadow-lg': variant === 'elevated',
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {}

function CardHeader({ className, children, ...props }: CardHeaderProps) {
  return (
    <div className={clsx('mb-4', className)} {...props}>
      {children}
    </div>
  );
}

interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement> {}

function CardTitle({ className, children, ...props }: CardTitleProps) {
  return (
    <h3
      className={clsx('text-xl font-semibold text-secondary-900', className)}
      {...props}
    >
      {children}
    </h3>
  );
}

interface CardDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {}

function CardDescription({ className, children, ...props }: CardDescriptionProps) {
  return (
    <p className={clsx('mt-1 text-secondary-600', className)} {...props}>
      {children}
    </p>
  );
}

interface CardContentProps extends HTMLAttributes<HTMLDivElement> {}

function CardContent({ className, children, ...props }: CardContentProps) {
  return (
    <div className={clsx('', className)} {...props}>
      {children}
    </div>
  );
}

interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {}

function CardFooter({ className, children, ...props }: CardFooterProps) {
  return (
    <div className={clsx('mt-4 flex items-center', className)} {...props}>
      {children}
    </div>
  );
}

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  type CardProps,
};
