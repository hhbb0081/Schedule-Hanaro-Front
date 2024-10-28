import { Controller, Control } from 'react-hook-form';
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from '@/components/ui/select';
import { RegisterCallData } from '@/pages';

type ConsultationSelectProps = {
  control: Control<RegisterCallData>;
  error: string | undefined;
};

export function ConsultationSelect({
  control,
  error,
}: ConsultationSelectProps) {
  return (
    <div>
      <label className='mb-1 block pb-2 text-left text-lg font-semibold'>
        상담종류
      </label>
      <Controller
        name='consultationType'
        control={control}
        rules={{ required: '상담 종류를 선택해주세요.' }}
        render={({ field }) => (
          <Select onValueChange={field.onChange} value={field.value}>
            <SelectTrigger className='w-full'>
              <SelectValue
                placeholder='상담 종류를 선택하세요'
                className='text-base'
              />
            </SelectTrigger>
            <SelectContent>
              {[
                '예금',
                '펀드',
                '대출',
                '외환',
                '마이데이터/모바일/인터넷뱅킹',
              ].map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      />
    </div>
  );
}
