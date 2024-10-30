import { Button } from '@/components/ui/button';

type Props = {
  title: string;
  content: string;
  onClick: () => void;
};

export default function MyCard({ title, content, onClick }: Props) {
  return (
    <div className='h-36 w-1/2 rounded-[0.625rem] px-[0.9375rem] py-[1rem] shadow-[4px_4px_20px_0px_rgba(0,0,0,0.20)] md:h-[6.75rem] md:px-[0.75rem] md:py-[0.7rem]'>
      <div className='flex h-full w-full flex-col items-start justify-between'>
        <div className='text-[1.25rem] font-[600] md:text-[0.9rem]'>
          {title}
        </div>
        <div className='text-[0.9rem] font-[400] text-lightGrey md:text-[0.75rem]'>
          {content}
        </div>
        <Button onClick={onClick} className='h-9 md:h-8 md:text-[0.75rem]'>
          예약하기
        </Button>
      </div>
    </div>
  );
}
