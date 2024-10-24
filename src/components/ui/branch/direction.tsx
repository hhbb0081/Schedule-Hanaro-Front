import { ReactComponent as Direction } from '@/assets/icons/branch/direction.svg';

export const DirectionButton = () => {
  return (
    <button className="font-['Hana2.0 CM'] flex h-10 items-center gap-2 rounded-[0.625rem] border border-black bg-white px-[0.8125rem] py-[0.4375rem] text-center text-base font-normal text-[#5b5b5b]">
      <div className='h-auto w-4'>
        <Direction className='h-full w-full' />
      </div>
      <span>길찾기</span>
    </button>
  );
};
