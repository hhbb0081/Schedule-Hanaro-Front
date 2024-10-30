import { Button } from '@/components/ui/button';

type Props = {
  title: string;
  content: string;
};

export default function RecommendCard({ title, content }: Props) {
  return (
    <div className='flex h-[4rem] w-full items-center justify-between rounded-[0.625rem] px-[0.9375rem] py-[1rem] shadow-[4px_4px_20px_0px_rgba(0,0,0,0.20)] md:h-[3rem]'>
      <div className='flex w-full items-center gap-4'>
        <div className='text-[1.25rem] font-[600] md:text-[1rem]'>{title}</div>
        <div className='text-[1.1rem] font-[400] text-lightGrey md:text-[0.9rem]'>
          {content}
        </div>
      </div>
      <Button className='h-7 w-[6rem] rounded-[50rem] md:h-5 md:w-[4rem] md:text-[0.75rem]'>
        추천
      </Button>
    </div>
  );
}
