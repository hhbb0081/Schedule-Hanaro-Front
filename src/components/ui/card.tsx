import { cva, type VariantProps } from 'class-variance-authority';
import { HTMLAttributes, PropsWithChildren } from 'react';

const CardVariants = cva(
  'w-full rounded-lg py-5 bg-white shadow-[0px_0px_20px_var(--sds-size-depth-200)_rgba(0,0,0,0.13)] text-center',
  {
    variants: {
      variant: {
        default: 'badge border-transparent text-primary-foreground',
        secondary:
          'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
        destructive:
          'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80',
        outline: 'text-main border-main bg-white',
        active: 'badge hover:bg-[main/90] active:bg-[main/90]',
        noactive: 'text-[#C9C9C9] border-border bg-white',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface CardProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof CardVariants> {}

function Card({ children, className, ...props }: PropsWithChildren<CardProps>) {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
}

export { Card, CardVariants };
