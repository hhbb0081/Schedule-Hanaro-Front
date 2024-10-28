import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

interface ModalFormPageProps {
  isChecked1: boolean;
  isChecked2: boolean;
  setIsChecked1: React.Dispatch<React.SetStateAction<boolean>>;
  setIsChecked2: React.Dispatch<React.SetStateAction<boolean>>;
  handleAgree: () => void;
  handleClose: () => void;
}

export default function ModalFormPage({
  isChecked1,
  isChecked2,
  setIsChecked1,
  setIsChecked2,
  handleAgree,
  handleClose,
}: ModalFormPageProps) {
  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
      <div className='w-[400px] space-y-4 rounded-lg bg-white p-6'>
        <h2 className='text-lg font-semibold'>이용 약관 동의</h2>

        <div className='space-y-4 text-left'>
          <div>
            <div
              className='flex items-center space-x-2'
              onClick={() => setIsChecked1((prev) => !prev)}
            >
              <Check
                className={`h-5 w-5 ${
                  isChecked1 ? 'text-black' : 'text-gray-400'
                }`}
              />
              <label className='ml-2 text-left'>이용약관(필수)</label>
            </div>
            <textarea
              readOnly
              className='mt-2 h-24 w-full rounded-md border p-2'
              value='이용약관...'
            />
          </div>

          <div>
            <div
              className='flex items-center space-x-2'
              onClick={() => setIsChecked2((prev) => !prev)}
            >
              <Check
                className={`h-5 w-5 ${
                  isChecked2 ? 'text-black' : 'text-gray-400'
                }`}
              />
              <label className='ml-2'>개인정보 처리방침(필수)</label>
            </div>
            <textarea
              readOnly
              className='mt-2 h-24 w-full rounded-md border p-2'
              value='개인정보...'
            />
          </div>
        </div>

        <Button
          onClick={handleAgree}
          className='mt-4 w-full bg-main text-white'
          disabled={!isChecked1 || !isChecked2}
        >
          동의합니다
        </Button>
        <Button variant='ghost' onClick={handleClose} className='mt-2 w-full'>
          닫기
        </Button>
      </div>
    </div>
  );
}