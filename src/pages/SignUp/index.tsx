import { Button } from '@/components/ui/button';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { Toaster } from '@/components/ui/toaster';
import { ReusableInput } from '@/components/Register/ReusableInput';
import Header from '@/components/Header/Header';
import { PhoneNumberInput } from '@/components/Register/PhoneNumberInput';
import { BirthdayPicker } from '@/components/SignUp/BirthdayPicker';
import { PasswordInput } from '@/components/SignUp/PasswordInput';
import { ConfirmPasswordInput } from '@/components/SignUp/ConfirmPasswordInput';
import { GenderSelect } from '@/components/SignUp/GenderSelect';

export type SignUpData = {
  name: string;
  id: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
  reservationDate: Date | undefined;
  nocontent: null;
  birthday: Date;
  gender: string;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const showToast = (toast: any, description: string) => {
  toast({
    description,
    duration: 3000,
  });
};

export function SignUpPage() {
  const { toast } = useToast();
  const navigate = useNavigate();
  const {
    trigger,
    register,
    setValue,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpData>();

  const onSubmit: SubmitHandler<SignUpData> = (data) => {
    console.log('폼 데이터:', data);
    showToast(toast, '회원가입 완료되었습니다!');
    setTimeout(() => {
      navigate('/');
    }, 1000);
  };

  return (
    <>
      <Header title='회원가입' />
      <div className='mx-auto flex min-h-screen w-[90%] flex-col'>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex h-screen w-full flex-col justify-between gap-[1rem] pt-[5rem]'
        >
          <div className='flex flex-col gap-[1rem]'>
            <ReusableInput
              register={register}
              fieldName='name'
              error={errors.name?.message}
              label='이름'
              placeholder='ex) 김하나'
              type='text'
            />
            <ReusableInput
              register={register}
              fieldName='id'
              error={errors.id?.message}
              label='아이디'
              placeholder='ex) HanaBank@gmail.com'
              type='text'
            />
            <PasswordInput
              register={register}
              name='password'
              error={errors.password?.message}
            />
            <ConfirmPasswordInput
              register={register}
              name='confirmPassword'
              error={errors.confirmPassword?.message}
              watch={watch}
            />
            <PhoneNumberInput
              register={register}
              name='phone'
              error={errors.phone?.message}
            />
            <BirthdayPicker
              register={register}
              trigger={trigger}
              setValue={setValue}
              name='birthday'
              error={errors.birthday?.message}
            />
            <GenderSelect
              register={register}
              trigger={trigger}
              name='gender'
              error={errors.gender?.message}
              setValue={setValue}
            />
          </div>

          <div className='flex flex-col pb-[6.5rem]'>
            <Button type='submit' variant='default' className='w-full'>
              회원가입
            </Button>
          </div>
        </form>

        <Toaster />
      </div>
    </>
  );
}
