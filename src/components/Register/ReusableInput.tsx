import { FieldValues, Path, UseFormRegister } from 'react-hook-form';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { FormErrorMessage } from './FormErrorMessage';

interface ReusableInputProps<T extends FieldValues> {
  register: UseFormRegister<T>;
  fieldName: Path<T>;
  error: string | undefined;
  label: string;
  placeholder: string;
  type?: 'text' | 'textarea';
}

export function ReusableInput<T extends FieldValues>({
  register,
  fieldName,
  error,
  label,
  placeholder,
  type = 'text',
}: ReusableInputProps<T>) {
  return (
    <div>
      <label className='mb-1 block text-left text-lg font-semibold'>
        {label}
      </label>
      {type === 'textarea' ? (
        <Textarea
          {...register(fieldName, {
            required: `${label}을 입력해주세요.`,
          })}
          placeholder={placeholder}
          className='w-full resize-none border-2 p-2 text-base outline-none'
          rows={5}
        />
      ) : (
        <Input
          {...register(fieldName, {
            required: `${label}을 입력해주세요.`,
          })}
          placeholder={placeholder}
          className='w-full border-b-2 py-2 text-base outline-none'
        />
      )}
      <FormErrorMessage error={error} />
    </div>
  );
}
