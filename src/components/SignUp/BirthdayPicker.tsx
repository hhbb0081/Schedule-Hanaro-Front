import { useState } from 'react';
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

type BirthdayPickerProps<T extends FieldValues> = {
  register: UseFormRegister<T>;
  trigger: UseFormTrigger<T>;
  setValue: UseFormSetValue<T>;
  name: Path<T>;
  error?: string;
};

export function BirthdayPicker<T extends FieldValues>({
  register,
  trigger,
  name,
  error,
  setValue,
}: BirthdayPickerProps<T>) {
  const [selectedYear, setSelectedYear] = useState<string | undefined>();
  const [selectedMonth, setSelectedMonth] = useState<string | undefined>();
  const [selectedDay, setSelectedDay] = useState<string | undefined>();

  const updateAndTriggerValidation = (
    field: 'year' | 'month' | 'day',
    value: string
  ) => {
    if (field === 'year') setSelectedYear(value);
    if (field === 'month') setSelectedMonth(value);
    if (field === 'day') setSelectedDay(value);

    setTimeout(() => {
      trigger(name);
    }, 0);
  };

  return (
    <div>
      <label className='mb-1 block pb-2 text-left text-lg font-semibold'>
        생년월일
      </label>
      <div className='flex space-x-2'>
        <Select
          onValueChange={(value) => updateAndTriggerValidation('year', value)}
          value={selectedYear || ''}
        >
          <SelectTrigger className='w-full'>
            <SelectValue placeholder='연도' />
          </SelectTrigger>
          <SelectContent>
            {Array.from(
              { length: 100 },
              (_, i) => `${new Date().getFullYear() - i}`
            ).map((year) => (
              <SelectItem key={year} value={year}>
                {year}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select
          onValueChange={(value) => updateAndTriggerValidation('month', value)}
          value={selectedMonth || ''}
          disabled={!selectedYear}
        >
          <SelectTrigger className='w-full'>
            <SelectValue placeholder='월' />
          </SelectTrigger>
          <SelectContent>
            {Array.from({ length: 12 }, (_, i) => `${i + 1}`).map((month) => (
              <SelectItem key={month} value={month}>
                {month}월
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select
          onValueChange={(value) => updateAndTriggerValidation('day', value)}
          value={selectedDay || ''}
          disabled={!selectedYear || !selectedMonth}
        >
          <SelectTrigger className='w-full'>
            <SelectValue placeholder='일' />
          </SelectTrigger>
          <SelectContent>
            {selectedYear &&
              selectedMonth &&
              Array.from(
                {
                  length: new Date(
                    parseInt(selectedYear),
                    parseInt(selectedMonth),
                    0
                  ).getDate(),
                },
                (_, i) => `${i + 1}`
              ).map((day) => (
                <SelectItem key={day} value={day}>
                  {day}일
                </SelectItem>
              ))}
          </SelectContent>
        </Select>
      </div>

      <input
        type='hidden'
        {...register(name, {
          validate: () => {
            if (!selectedYear || !selectedMonth || !selectedDay) {
              return '생년월일을 모두 선택해주세요.';
            }
            const combinedDate = `${selectedYear}-${selectedMonth.padStart(2, '0')}-${selectedDay.padStart(2, '0')}`;
            setValue(name, combinedDate as PathValue<T, Path<T>>);
            return true;
          },
        })}
      />

      <FormErrorMessage error={error} />
    </div>
  );
}
