import Nav from '@/components/Nav/Nav';
import { Button } from '@/components/ui/button';
import { RESERVATION_TYPE } from '@/constants/reservation';
import '@/index.css';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function ReservationPage() {
  const navigate = useNavigate();
  const [selectedRes, setSelectedRes] = useState(0);
  const handlePage = () => {
    const type =
      selectedRes === 0 ? 'call' : selectedRes === 1 ? 'inquiry' : 'visit';
    navigate(`/register/${type}`);
  };
  return (
    <>
      <div className='mx-auto flex h-screen w-[90%] flex-col justify-between pb-[7rem] pt-[5rem]'>
        <div className='space-y-4'>
          <div className='flex flex-col items-start justify-center text-3xl font-bold'>
            <span>상담 유형을</span>
            <span>선택해주세요</span>
          </div>
          <ul className='space-y-5'>
            {RESERVATION_TYPE.map(({ id, title, subTitle }) => (
              <li key={id} onClick={() => setSelectedRes(id)}>
                <ReservationTypeCard
                  title={title}
                  subTitle={subTitle}
                  selected={selectedRes === id}
                />
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Button onClick={handlePage}>상담 유형 선택하기</Button>
        </div>
      </div>
      <Nav />
    </>
  );
}

function ReservationTypeCard({
  title,
  subTitle,
  selected,
}: {
  title: string;
  subTitle: string[];
  selected: boolean;
}) {
  return (
    <div
      className={cn(
        'flex w-full cursor-pointer flex-col items-start gap-4 rounded-[0.9125rem] border-2 border-border bg-[#F9F9F9] p-5 transition-colors',
        selected
          ? 'border-[3px] border-main bg-white shadow-[0_0_17px_0_rgba(0,132,133,0.25)] hover:bg-none'
          : 'hover:bg-[#f1f1f1]'
      )}
    >
      <span className='text-[1.5rem] font-bold'>{title}</span>
      <ul className='flex flex-col items-start'>
        {subTitle.map((st, idx) => (
          <li key={idx} className='text-[1rem] text-lightGrey'>
            {st}
          </li>
        ))}
      </ul>
    </div>
  );
}
