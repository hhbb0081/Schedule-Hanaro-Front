import { Button } from '@/components/ui/button';

import { useState, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { Toaster } from '@/components/ui/toaster';
import { PhoneNumberInput } from '@/components/Register/PhoneNumberInput';
import { ConsultationSelect } from '@/components/Register/ConsultationSelect';
import { DateAndTimePicker } from '@/components/Register/DateAndTimePicker';
import { AgreementCheckbox } from '@/components/Register/AgreementCheckbox';
import { ReusableInput } from '@/components/Register/ReusableInput';

export type RegisterCallData = {
  name: string;
  phone: string;
  consultationType: string;
  reservationDate: Date | undefined;
  reservationTime: string;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const showToast = (toast: any, description: string) => {
  toast({
    description,
    duration: 3000,
  });
};

// 영업점 운영 시간 데이터
const storeOperatingHours = {
  startTime: '09:00',
  endTime: '18:00',
};

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

export function RegisterCallFormPage() {
  const { toast } = useToast();
  const navigate = useNavigate();
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterCallData>();

  const onSubmit: SubmitHandler<RegisterCallData> = (data) => {
    if (!isChecked1 || !isChecked2) {
      showToast(toast, '개인정보 수집 및 이용에 동의해야 합니다.');
      return;
    }
    console.log('예약 정보:', {
      ...data,
      reservationDate: data.reservationDate,
      consultationType: data.consultationType,
      reservationTime: data.reservationTime,
    });

    showToast(toast, '예약 완료되었습니다!');
    setTimeout(() => {
      navigate('/');
    }, 1000);
  };

  const [timeSlots, setTimeSlots] = useState<string[]>([]);

  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);

  useEffect(() => {
    const slots = generateTimeSlots(
      storeOperatingHours.startTime,
      storeOperatingHours.endTime
    );
    setTimeSlots(slots);
  }, []);

  return (
    <div className='mx-auto flex min-h-[80%] w-[90%] flex-col justify-between py-5'>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-1 flex-col'>
        <div className='flex-1 space-y-4'>
          <ReusableInput
            register={register}
            fieldName='name'
            error={errors.name?.message}
            label='이름'
            placeholder='ex) 김하나'
            type='text'
          />
          <PhoneNumberInput register={register} error={errors.phone?.message} />
          <ConsultationSelect
            control={control}
            error={errors.consultationType?.message}
            fieldName={'consultationType'}
          />
          <DateAndTimePicker<RegisterCallData>
            control={control}
            timeSlots={timeSlots}
            dateError={errors.reservationDate?.message}
            timeError={errors.reservationTime?.message}
            dateFieldName={'reservationDate'}
            timeFieldName={'reservationTime'}
          />
        </div>

        <div>
          <AgreementCheckbox
            isChecked1={isChecked1}
            isChecked2={isChecked2}
            setIsChecked1={setIsChecked1}
            setIsChecked2={setIsChecked2}
          />
          <div className='flex justify-between'>
            <Button
              type='button'
              onClick={() => navigate('/')}
              variant='ghost'
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

      <Toaster />
    </div>
  );
}
