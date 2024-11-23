import { FieldValues, Path, UseFormRegister } from 'react-hook-form';
import { Input } from '../ui/input';
import { FormErrorMessage } from '../Register/FormErrorMessage';

type PasswordInputProps<T extends FieldValues> = {
  register: UseFormRegister<T>;
  error: string | undefined;
  name: Path<T>;
};

export function PasswordInput<T extends FieldValues>({
  register,
  error,
  name,
}: PasswordInputProps<T>) {
  return (
    <div>
      <label className='mb-1 block text-left text-lg font-semibold'>
        비밀번호
      </label>
      <Input
        type='password'
        placeholder='비밀번호를 입력하세요'
        {...register(name, {
          required: '비밀번호를 입력해주세요.',
          minLength: {
            value: 8,
            message: '비밀번호는 최소 8자 이상이어야 합니다.',
          },
        })}
        className='w-full border-b-2 py-2 text-base outline-none'
      />
      <FormErrorMessage error={error} />
    </div>
  );
}
