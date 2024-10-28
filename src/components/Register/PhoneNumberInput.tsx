import { Input } from '@/components/ui/input';
import { RegisterCallData } from '@/pages';
import { ChangeEvent, useState } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { FormErrorMessage } from './FormErrorMessage';

type PhoneInputProps = {
  register: UseFormRegister<RegisterCallData>;
  error: string | undefined;
};

export function PhoneNumberInput({ register, error }: PhoneInputProps) {
  const [formattedPhone, setFormattedPhone] = useState('');

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value.replace(/[^0-9]/g, '');
    setFormattedPhone(formatPhoneNumber(input));
  };

  const formatPhoneNumber = (value: string) => {
    if (value.length <= 3) return value;
    if (value.length <= 7) return `${value.slice(0, 3)}-${value.slice(3)}`;
    return `${value.slice(0, 3)}-${value.slice(3, 7)}-${value.slice(7)}`;
  };

  return (
    <div>
      <label className='mb-1 block text-left text-lg font-semibold'>
        전화번호
      </label>
      <Input
        type='text'
        placeholder='ex) 010-1234-1234'
        value={formattedPhone}
        {...register('phone', {
          required: '전화번호를 입력해주세요.',
          pattern: {
            value: /^\d{3}-\d{3,4}-\d{4}$/,
            message: '유효한 전화번호 형식이 아닙니다.',
          },
          onChange: (e) => handlePhoneChange(e),
        })}
        className='w-full border-b-2 py-2 text-base outline-none'
      />
      <FormErrorMessage error={error} />
    </div>
  );
}
