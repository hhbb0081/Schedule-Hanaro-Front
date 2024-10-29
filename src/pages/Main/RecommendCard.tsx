import { Button } from '@/components/ui/button';

type Props = {
  title: string;
  content: string;
};

export default function RecommendCard({ title, content }: Props) {
  return (
    <div className='flex h-[5rem] w-full items-center justify-between rounded-[0.625rem] px-[0.9375rem] py-[1rem] shadow-[4px_4px_20px_0px_rgba(0,0,0,0.20)]'>
      <div className='flex w-full items-center gap-4'>
        <div className='text-[1.5rem] font-[600]'>{title}</div>
        <div className='text-[1.25rem] font-[400] text-lightGrey'>
          {content}
        </div>
      </div>
      <Button className='h-7 w-[6rem] rounded-[50rem]'>추천</Button>
    </div>
  );
}
