import { Calendar } from '@/components/ui/calendar'; // react-day-picker 기반 Calendar 컴포넌트
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { format, isBefore, isAfter } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

type DatePickerProps = {
  selected: Date | undefined; // 선택된 날짜 (null 대신 undefined 사용)
  onChange: (date: Date | undefined) => void; // 날짜 변경 이벤트
  minDate?: Date; // 선택 가능한 최소 날짜
  maxDate?: Date; // 선택 가능한 최대 날짜
  placeholderText?: string; // 기본 placeholder
};

export function DatePicker({
  selected,
  onChange,
  minDate,
  maxDate,
  placeholderText = '날짜 선택',
}: DatePickerProps) {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  return (
    <div>
      <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
        <PopoverTrigger asChild>
          <Button
            variant='link'
            className='text-lightGray h-[3rem] w-[9rem] justify-start rounded-full border-input pl-3 text-left align-middle shadow-md'
          >
            {selected ? (
              <span className='ml-1 text-base font-normal text-gray-500'>
                {format(selected, 'yyyy-MM-dd')}
              </span>
            ) : (
              <span className='ml-1 text-base font-normal text-gray-500'>
                {placeholderText}
              </span>
            )}
            <CalendarIcon className='ml-auto mr-1 h-4 w-4 opacity-50' />
          </Button>
        </PopoverTrigger>
        <PopoverContent className='min-h-[360px] w-auto p-0' align='start'>
          <Calendar
            mode='single'
            selected={selected} // undefined 허용
            onSelect={(date) => {
              onChange(date || undefined); // date가 null일 경우 undefined 처리
              setIsPopoverOpen(false);
            }}
            disabled={(date) =>
              Boolean(
                (minDate && isBefore(date, minDate)) ||
                  (maxDate && isAfter(date, maxDate))
              )
            }
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
