import { Button } from '@/components/ui/button';

type Props = {
  title: string;
  content: string;
};

export default function RecommendCard({ title, content }: Props) {
  return (
    <div className='flex h-[3rem] w-full items-center justify-between px-[0.9375rem] py-[1rem] md:h-[3rem]'>
      <div className='flex w-full items-center gap-4'>
        <div className='text-[1rem] font-[600] md:text-[1rem]'>{title}</div>
        <div className='pt-[0.1rem] text-[0.9rem] font-[400] text-lightGrey md:text-[0.9rem]'>
          {content}
        </div>
      </div>
      <Button className='h-[1.5rem] w-[5rem] rounded-[50rem] text-[0.8rem] md:h-5 md:w-[4rem] md:text-[0.75rem]'>
        추천
      </Button>
    </div>
  );
}
