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
      <div className='mx-auto flex w-[90%] flex-col'>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex w-full flex-col gap-[1rem] pt-[5rem]'
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
              placeholder='ex) HanaBank'
              type='text'
            />
            <ReusableInput
              register={register}
              fieldName='email'
              error={errors.email?.message}
              label='이메일'
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
          </div>

          <div className='flex flex-col'>
            <div className='flex justify-between'>
              <Button type='submit' variant='default' className='w-full'>
                회원가입
              </Button>
            </div>
          </div>
        </form>

        <Toaster />
      </div>
    </>
  );
}
