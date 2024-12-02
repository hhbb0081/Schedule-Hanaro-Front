import { ReactComponent as Back } from '@/assets/icons/chevron-left.svg';
import { ButtonHTMLAttributes } from 'react';
import { useNavigate } from 'react-router-dom';

type Props = {
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const BackButton = ({ className = '' }: Props) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <button className={`${className}`} onClick={handleBack}>
      <Back className='h-full' />
    </button>
  );
};
