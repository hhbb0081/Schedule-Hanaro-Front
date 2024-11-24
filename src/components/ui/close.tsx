import { ReactComponent as Close } from '@/assets/icons/close.svg';
import { ButtonHTMLAttributes } from 'react';
import { useNavigate } from 'react-router-dom';

type Props = {
  className?: string;
  location: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const CloseButton = ({ className = '', location = '' }: Props) => {
  const navigate = useNavigate();
  const close = () => {
    if (location.includes('reservation/visit')) navigate(`/${location}`);
    else navigate('/');
  };
  return (
    <button className={`${className}`} onClick={close}>
      <Close className='mr-2 h-[1.75rem] lg:h-[2.1875rem]' />
    </button>
  );
};
