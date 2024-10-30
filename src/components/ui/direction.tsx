import { cva, type VariantProps } from 'class-variance-authority';

import { ReactComponent as Direction } from '@/assets/icons/branch/direction.svg';
import { ReactComponent as DirectionWhite } from '@/assets/icons/navigate.svg';
import { cn } from '@/lib/utils';
import { Button } from './button';

const DirectionButtonVariants = cva(
  'flex items-center gap-2 border text-center w-fit h-fit',
  {
    variants: {
      variant: {
        default:
          'border-black bg-white px-[0.8125rem] py-[0.4375rem] rounded-[0.625rem] ',
        square:
          'bg-[#454545] rounded-[0.9375rem] flex-col gap-1 text-white px-[0.625rem] py-[0.625rem] text-white h-fit hover:bg-[#545454]',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline: 'border border-[#464646] justify-center items-center ',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost:
          'border border-input bg-background hover:bg-accent hover:text-accent-foreground border-main/80 border-[1px] text-main',
        link: 'text-primary underline-offset-4 hover:underline',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface DirectionButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof DirectionButtonVariants> {
  asChild?: boolean;
}

export const DirectionButton = ({
  className,
  variant,
  ...props
}: DirectionButtonProps) => {
  return (
    <Button
      className={cn(DirectionButtonVariants({ variant, className }))}
      {...props}
    >
      <div className='h-auto w-4'>
        {variant === 'square' ? (
          <DirectionWhite className='h-full w-full' />
        ) : (
          <Direction className='h-full w-full' />
        )}
      </div>
      <span
        className={cn(
          'text-[0.8715rem] font-normal',
          variant === 'square' ? 'text-white' : 'text-[#5b5b5b]'
        )}
      >
        길찾기
      </span>
    </Button>
  );
};
