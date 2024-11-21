import {
  FieldValues,
  Path,
  UseFormRegister,
  UseFormWatch,
} from 'react-hook-form';
import { Input } from '../ui/input';
import { FormErrorMessage } from '../Register/FormErrorMessage';

type ConfirmPasswordInputProps<T extends FieldValues> = {
  register: UseFormRegister<T>;
  error: string | undefined;
  name: Path<T>;
  watch: UseFormWatch<T>;
};

export function ConfirmPasswordInput<T extends FieldValues>({
  register,
  error,
  name,
  watch,
}: ConfirmPasswordInputProps<T>) {
  const password = watch('password' as Path<T>);

  return (
    <div>
      <label className='mb-1 block text-left text-lg font-semibold'>
        비밀번호 확인
      </label>
      <Input
        type='password'
        placeholder='비밀번호를 다시 입력하세요'
        {...register(name, {
          required: '비밀번호 확인을 입력해주세요.',
          validate: (value) =>
            value === password || '비밀번호가 일치하지 않습니다.',
        })}
        className='w-full border-b-2 py-2 text-base outline-none'
      />
      <FormErrorMessage error={error} />
    </div>
  );
}
