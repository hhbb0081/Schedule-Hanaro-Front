import { RegisterCallData } from '@/pages';
import { UseFormRegister } from 'react-hook-form';
import { Input } from '../ui/input';

type NameProps = {
  register: UseFormRegister<RegisterCallData>;
  error: string | undefined;
};

export function NameInput({ register, error }: NameProps) {
  return (
    <div>
      <label className='mb-1 block text-left text-lg font-semibold'>이름</label>
      <Input
        type='text'
        placeholder='ex) 김하나'
        {...register('name', { required: '이름을 입력해주세요.' })}
        className='w-full border-b-2 py-2 text-base outline-none'
      />
      {error && (
        <p className='px-1 py-1 text-left text-xs text-red-500'>{error}</p>
      )}
    </div>
  );
}
