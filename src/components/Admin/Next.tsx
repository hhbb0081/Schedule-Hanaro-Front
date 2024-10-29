import { Button } from '../ui/button';

type NextProps = {
  onClick: () => void;
};

export default function Next({ onClick }: NextProps) {
  return (
    <Button
      onClick={onClick}
      className='inline-flex h-[4.5rem] w-[12rem] items-center justify-center gap-2 rounded-[30rem] bg-main/80 px-[1.5rem] py-[1.5rem]'
    >
      <div className='text-[1.75rem] font-extrabold text-white'>다음으로</div>
      <div className='relative flex h-[1.5rem] w-[1.5rem] items-center justify-center'>
        <svg
          width='10%'
          height='10%'
          viewBox='0 0 11527 7244'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect
            x='1'
            y='1'
            width='11526'
            height='7243'
            fill='white'
            stroke='black'
          />
        </svg>
      </div>
    </Button>
  );
}
