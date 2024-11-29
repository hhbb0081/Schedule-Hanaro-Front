import { Badge } from '@/components/ui/badge';

type Props = {
  title: string;
  content: string;
};

export default function RecommendCard({ title, content }: Props) {
  return (
    <div className='mt-3 flex h-[4.5rem] w-full items-center justify-between rounded-[0.8rem] px-[0.9375rem] py-[1rem] shadow-[4px_4px_20px_0px_rgba(0,0,0,0.20)]'>
      <div className='flex w-full justify-between px-3'>
        <div className='flex items-center gap-4'>
          <div className='text-[1.25rem] font-[600]'>{title}</div>
          <div className='text-[1.175rem] font-[400]'>{content}</div>
        </div>
        <Badge className='h-[2.75rem] w-[8rem] justify-center text-[1rem] font-[500]'>
          유사도 97.2%
        </Badge>
      </div>
    </div>
  );
}
