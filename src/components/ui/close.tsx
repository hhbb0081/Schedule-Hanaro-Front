import { ReactComponent as Close } from '@/assets/icons/close.svg';
import { ButtonHTMLAttributes } from 'react';

type Props = {
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const CloseButton = ({ className = '' }: Props) => {
  return (
    <button className={`${className}`} onClick={close}>
      <Close width={18} height={18} className='mr-4' />
    </button>
  );
};
