import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { CalendarIcon, Check, ClockIcon } from 'lucide-react';
import { format } from 'date-fns';
import { useState, useEffect } from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';

type RegisterCallData = {
  name: string;
  phone: string;
  consultationType: string;
  reservationDate: Date | undefined;
  reservationTime: string;
};

// 영업점 운영 시간 데이터
const storeOperatingHours = {
  startTime: '09:00',
  endTime: '18:00',
};

// 시간대별 예약된 인원 수
const mockReservations = {
  '09:00~10:00': 10,
  '10:00~11:00': 30,
  '11:00~12:00': 50,
  '12:00~13:00': 75,
};

const MAX_CAPACITY = 100;

// 1시간 단위의 시간 생성
function generateTimeSlots(startTime: string, endTime: string) {
  const slots: string[] = [];
  let current = new Date(`1970-01-01T${startTime}:00`);
  const end = new Date(`1970-01-01T${endTime}:00`);

  while (current < end) {
    const next = new Date(current);
    next.setHours(current.getHours() + 1);
    slots.push(
      `${current.toTimeString().slice(0, 5)}~${next.toTimeString().slice(0, 5)}`
    );
    current = next;
  }

  return slots;
}

export default function RegisterCallFormPage() {
  const navigate = useNavigate();
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterCallData>();

  const [formattedPhone, setFormattedPhone] = useState('');

  const phoneValidationPattern = /^\d{3}-\d{3,4}-\d{4}$/;

  const onSubmit: SubmitHandler<RegisterCallData> = (data) => {
    if (!isChecked) {
      alert('개인정보 수집 및 이용에 동의해야 합니다.');
      return;
    }
    console.log('예약 정보:', {
      ...data,
      reservationDate: data.reservationDate, // 예약일
      consultationType: data.consultationType, // 상담 종류
      reservationTime: data.reservationTime,
    });
    setSubmitted(true);
    alert('예약이 완료되었습니다!');
    navigate('/');
  };

  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [timeSlots, setTimeSlots] = useState<string[]>([]);
  const [isChecked, setIsChecked] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const slots = generateTimeSlots(
      storeOperatingHours.startTime,
      storeOperatingHours.endTime
    );
    setTimeSlots(slots);
  }, []);

  //기본 화살표 제거
  useEffect(() => {
    const chevron = document.querySelector('.time-select .lucide-chevron-down');
    if (chevron) {
      chevron.remove();
    }
  }, []);

  // 체크박스
  const handleToggle = () => {
    setIsChecked((prev) => !prev);
  };

  // 남은 예약 가능 인원 계산 함수
  const getRemainingCapacity = (slot: string) => {
    const reserved =
      mockReservations[slot as keyof typeof mockReservations] || 0;
    return MAX_CAPACITY - reserved;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value.replace(/[^0-9]/g, '');
    const formatted = formatPhoneNumber(input);
    setFormattedPhone(formatted);
  };

  const formatPhoneNumber = (value: string) => {
    if (value.length <= 3) return value;
    if (value.length <= 7) return `${value.slice(0, 3)}-${value.slice(3)}`;
    return `${value.slice(0, 3)}-${value.slice(3, 7)}-${value.slice(7)}`;
  };

  return (
    <div className='mx-auto flex h-[90%] w-[90%] flex-col justify-between py-5'>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-1 flex-col'>
        {/* 이름 */}
        <div className='flex-1 space-y-4'>
          <div>
            <label className='mb-1 block text-left text-lg font-semibold'>
              이름
            </label>
            <Input
              type='text'
              placeholder='ex) 김하나'
              {...register('name', { required: '이름을 입력해주세요.' })}
              className='w-full border-b-2 py-2 text-base outline-none'
            />
            {errors.name && (
              <p className='px-1 py-1 text-left text-xs text-red-500'>
                {errors.name.message}
              </p>
            )}
          </div>

          {/* 전화번호 */}
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
                  value: phoneValidationPattern,
                  message: '유효한 전화번호 형식이 아닙니다.',
                },
                onChange: (e) => handlePhoneChange(e),
              })}
              className='w-full border-b-2 py-2 text-base outline-none'
            />
            {errors.phone && (
              <p className='px-1 py-1 text-left text-xs text-red-500'>
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* 상담종류 */}
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
                    <SelectItem value='예금' className='text-base'>
                      예금
                    </SelectItem>
                    <SelectItem value='펀드' className='text-base'>
                      펀드
                    </SelectItem>
                    <SelectItem value='대출' className='text-base'>
                      대출
                    </SelectItem>
                    <SelectItem value='외환' className='text-base'>
                      외환
                    </SelectItem>
                    <SelectItem
                      value='마이데이터/모바일/인터넷뱅킹'
                      className='text-base'
                    >
                      마이데이터/모바일/인터넷뱅킹
                    </SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
            {errors.consultationType && (
              <p className='px-1 py-1 text-left text-xs text-red-500'>
                {errors.consultationType.message}
              </p>
            )}
          </div>

          {/* 예약일시 */}
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
                    <Popover
                      open={isPopoverOpen}
                      onOpenChange={setIsPopoverOpen}
                    >
                      <PopoverTrigger asChild>
                        <Button
                          variant='outline'
                          className='h-10 w-full justify-start border-input pl-3 text-left text-lightGray'
                        >
                          {field.value ? (
                            <span className='text-base font-normal text-lightGray'>
                              {format(field.value, 'yyyy-MM-dd')}
                            </span>
                          ) : (
                            <span className='text-base font-normal text-lightGray'>
                              예약일 선택
                            </span>
                          )}
                          <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent
                        className='h-[400px] min-h-[300px] w-auto p-0'
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
                {errors.reservationDate && (
                  <p className='px-1 py-1 text-left text-xs text-red-500'>
                    {errors.reservationDate.message}
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
                        <ClockIcon className='clock-icon z-10 ml-2 h-5 w-5 text-gray-400' />
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
                {errors.reservationTime && (
                  <p className='px-1 py-1 text-left text-xs text-red-500'>
                    {errors.reservationTime.message}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        <div>
          {/* 개인정보 수집 동의 */}
          <div className='flex items-center space-x-2 pb-4'>
            <div onClick={handleToggle}>
              <Check
                className={`h-5 w-5 ${
                  isChecked ? 'text-black' : 'text-gray-400'
                }`}
              />
            </div>
            <label className='text-sm' onClick={handleToggle}>
              개인 정보 수집 및 이용 동의
            </label>
          </div>
          <div className='flex justify-between'>
            <Button
              type='button'
              onClick={() => navigate('/')}
              variant='outline'
              className='w-1/4'
            >
              취소
            </Button>
            <Button type='submit' variant='default' className='ml-2 w-3/4'>
              예약하기
            </Button>
          </div>
        </div>
      </form>

      {submitted && <p className='mt-4 text-main'>예약이 완료되었습니다!</p>}
    </div>
  );
}
