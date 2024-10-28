import { Control, Controller } from 'react-hook-form';
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from '@/components/ui/select';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { CalendarIcon, ClockIcon } from 'lucide-react';
import { MAX_CAPACITY, mockReservations } from '@/mock/mockReservationsNumber';
import { RegisterCallData } from '@/pages';
import { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { format } from 'date-fns';

interface DateAndTimePickerProps {
  control: Control<RegisterCallData>;
  timeSlots: string[];
  dateError: string | undefined;
  timeError: string | undefined;
}

export function DateAndTimePicker({
  control,
  timeSlots,
  dateError,
  timeError,
}: DateAndTimePickerProps) {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  useEffect(() => {
    const chevron = document.querySelector('.time-select .lucide-chevron-down');
    if (chevron) {
      chevron.remove();
    }
  }, []);

  const getRemainingCapacity = (slot: string) => {
    const reserved =
      mockReservations[slot as keyof typeof mockReservations] || 0;
    return MAX_CAPACITY - reserved;
  };

  return (
    <div>
      <label className='mb-1 block pb-2 text-left text-lg font-semibold'>
        예약일시
      </label>
      <div className='flex space-x-2'>
        <div className='w-1/2 flex-1'>
          <Controller
            name='reservationDate'
            control={control}
            rules={{ required: '예약일을 선택해주세요.' }}
            render={({ field }) => (
              <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant='outline'
                    className='text-lightGray h-10 w-full justify-start border-input pl-3 text-left'
                  >
                    {field.value ? (
                      <span className='text-lightGray text-base font-normal'>
                        {format(field.value, 'yyyy-MM-dd')}
                      </span>
                    ) : (
                      <span className='text-lightGray text-base font-normal'>
                        예약일 선택
                      </span>
                    )}
                    <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  className='min-h-[360px] w-auto p-0'
                  align='start'
                >
                  <Calendar
                    mode='single'
                    selected={field.value}
                    onSelect={(date) => {
                      field.onChange(date);
                      setIsPopoverOpen(false);
                    }}
                    disabled={(date) =>
                      date < new Date(new Date().setHours(0, 0, 0, 0))
                    }
                  />
                </PopoverContent>
              </Popover>
            )}
          />
          {dateError && (
            <p className='px-1 py-1 text-left text-xs text-red-500'>
              {dateError}
            </p>
          )}
        </div>

        <div className='w-1/2 flex-1'>
          <Controller
            name='reservationTime'
            control={control}
            rules={{ required: '시간대를 선택해주세요.' }}
            render={({ field }) => (
              <Select
                onValueChange={(value) => field.onChange(value)}
                value={field.value || ''}
              >
                <SelectTrigger className='time-select w-full'>
                  <SelectValue
                    placeholder='시간대를 선택하세요'
                    className='text-base'
                  >
                    {field.value
                      ? field.value.split(' ')[0]
                      : '시간대를 선택하세요'}
                  </SelectValue>
                  <ClockIcon className='clock-icon ml-2 h-5 w-5 text-gray-400' />
                </SelectTrigger>
                <SelectContent>
                  {timeSlots.map((slot) => (
                    <SelectItem
                      key={slot}
                      value={`${slot} ${getRemainingCapacity(slot)}명`}
                    >
                      <span className='flex-1'>{slot}</span>
                      <span className='ml-11'>
                        {getRemainingCapacity(slot)}명
                      </span>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          <FormErrorMessage error={timeError} />
        </div>
      </div>
    </div>
  );
}
