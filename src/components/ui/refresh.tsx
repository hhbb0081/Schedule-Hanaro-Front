import { ReactComponent as Refresh } from '@/assets/icons/reservation/refresh.svg';
import { ButtonHTMLAttributes } from 'react';

type Props = {
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const RefreshButton = ({ className = '' }: Props) => {
  return (
    <button className={`${className}`}>
      <Refresh className='h-full' />
    </button>
  );
};
