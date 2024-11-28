import { Button } from '@/components/ui/button';

import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { Toaster } from '@/components/ui/toaster';
import { ConsultationSelect } from '@/components/Register/ConsultationSelect';
import { AgreementCheckbox } from '@/components/Register/AgreementCheckbox';
import { ReusableInput } from '@/components/Register/ReusableInput';
import Header from '@/components/Header/Header';

export type RegisterInquiryData = {
  name: string;
  consultationType: string;
  reservationDate: Date | undefined;
  reservationTime: string;
  inquiryTitle: string;
  inquiryContent: string;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const showToast = (toast: any, description: string) => {
  toast({
    description,
    duration: 3000,
  });
};

export function RegisterInquiryFormPage() {
  const { toast } = useToast();
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<RegisterInquiryData>();

  const consultationType = watch('consultationType');

  const onSubmit: SubmitHandler<RegisterInquiryData> = (data) => {
    if (!isChecked1 || !isChecked2) {
      showToast(toast, '개인정보 수집 및 이용에 동의해야 합니다.');
      return;
    }
    console.log('예약 정보:', {
      ...data,
      consultationType: data.consultationType,
      reservationDate: data.reservationDate,
      reservationTime: data.reservationTime,
      inquiryTitle: data.inquiryTitle,
      inquiryContent: data.inquiryContent,
    });

    showToast(toast, '예약 완료되었습니다!');
    setTimeout(() => {
      navigate(`/reservation/inquiry/${id}`);
    }, 1000);
  };

  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);

  const isFormComplete = consultationType;

  return (
    <>
      <Header title='1:1 상담 예약' />
      <div className='mx-auto flex min-h-screen w-[90%] flex-col'>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex min-h-screen w-full flex-col justify-between gap-[1rem] pt-[5rem]'
        >
          <div className='flex flex-col gap-[2rem]'>
            <ReusableInput
              register={register}
              fieldName='name'
              error={errors.name?.message}
              label='이름'
              placeholder='ex) 김하나'
              type='text'
            />
            <ConsultationSelect
              control={control}
              error={errors.consultationType?.message}
              fieldName={'consultationType'}
            />

            <ReusableInput
              register={register}
              fieldName='inquiryContent'
              error={errors.inquiryContent?.message}
              label='문의 내용'
              placeholder='내용을 입력하세요.'
              type='textarea'
            />
          </div>

          <div className='flex flex-col'>
            <AgreementCheckbox
              isChecked1={isChecked1}
              isChecked2={isChecked2}
              setIsChecked1={setIsChecked1}
              setIsChecked2={setIsChecked2}
            />
            <div className='flex justify-between pb-[6.5rem]'>
              <Button
                type='button'
                onClick={() => navigate('/')}
                variant='ghost'
                className='w-1/4'
              >
                취소
              </Button>
              <Button
                type='submit'
                variant='default'
                className='ml-2 w-3/4'
                disabled={!isFormComplete}
              >
                예약하기
              </Button>
            </div>
          </div>
        </form>

        <Toaster />
      </div>
    </>
  );
}
