import { ReactComponent as Back } from '@/assets/icons/arrow_left.svg';
import { ButtonHTMLAttributes } from 'react';
import { useNavigate } from 'react-router-dom';

type Props = {
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const BackButton = ({ className = '' }: Props) => {
  const navigate = useNavigate();
  const back = () => {
    navigate(-1);
  };
  return (
    <button className={`ml-4 ${className}`} onClick={back}>
      <Back width={21} height={21} />
    </button>
  );
};
