import {
  FieldValues,
  Path,
  PathValue,
  UseFormRegister,
  UseFormSetValue,
  UseFormTrigger,
} from 'react-hook-form';
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from '@/components/ui/select';
import { FormErrorMessage } from '../Register/FormErrorMessage';
import { useState } from 'react';

type GenderSelectProps<T extends FieldValues> = {
  register: UseFormRegister<T>;
  setValue: UseFormSetValue<T>;
  trigger: UseFormTrigger<T>;
  name: Path<T>;
  error?: string;
};

export function GenderSelect<T extends FieldValues>({
  register,
  setValue,
  trigger,
  name,
  error,
}: GenderSelectProps<T>) {
  const [selectedGender, setSelectedGender] = useState<string | undefined>();

  const updateGender = (value: string) => {
    setSelectedGender(value);
    setTimeout(() => {
      trigger(name);
    }, 0);
  };

  return (
    <>
      <label className='block pb-2 text-left text-lg font-semibold'>성별</label>
      <Select onValueChange={updateGender} value={selectedGender || ''}>
        <SelectTrigger className='w-full'>
          <SelectValue placeholder='성별을 선택하세요' />
        </SelectTrigger>
        <SelectContent>
          {['남자', '여자'].map((gender) => (
            <SelectItem key={gender} value={gender}>
              {gender}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <input
        type='hidden'
        {...register(name, {
          validate: () => {
            if (!selectedGender) {
              return '성별을 선택해주세요.';
            }
            const value = selectedGender;
            setValue(name, value as PathValue<T, Path<T>>);
            return true;
          },
        })}
        value={selectedGender || ''}
      />

      <FormErrorMessage error={error} />
    </>
  );
}
