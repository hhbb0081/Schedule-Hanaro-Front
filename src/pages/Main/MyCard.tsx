import { Button } from '@/components/ui/button';

type Props = {
  title: string;
  content: string;
  onClick: () => void;
};

export default function MyCard({ title, content, onClick }: Props) {
  return (
    <div className='h-36 w-1/2 rounded-[0.625rem] px-[0.9375rem] py-[1rem] shadow-[4px_4px_20px_0px_rgba(0,0,0,0.20)]'>
      <div className='flex h-full w-full flex-col items-start justify-between'>
        <div className='text-[1.25rem] font-[600]'>{title}</div>
        <div className='text-[0.9rem] font-[400] text-lightGrey'>{content}</div>
        <Button onClick={onClick}>예약하기</Button>
      </div>
    </div>
  );
}
