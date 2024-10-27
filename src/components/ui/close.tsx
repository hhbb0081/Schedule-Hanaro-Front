import { ReactComponent as Close } from '@/assets/icons/close.svg';
import { ButtonHTMLAttributes } from 'react';
import { useNavigate } from 'react-router-dom';

type Props = {
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const CloseButton = ({ className = '' }: Props) => {
  const navigate = useNavigate();
  const close = () => {
    if (window.history.length > 1) navigate(-1);
    else navigate('/');
  };
  return (
    <button className={`${className}`} onClick={close}>
      <Close width={18} height={18} className='mr-4' />
    </button>
  );
};
