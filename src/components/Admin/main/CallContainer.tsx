import CallInfoBox from './CallInfoBox';
import CurrentBox from './CurrentBox';
import WaitingList from './waitingList';

function CallContainer() {
  return (
    <div className='mx-auto w-[90%] space-y-5 text-left'>
      <span className='text-2xl font-bold'>전화 문의</span>
      <div className='flex w-full items-center gap-5'>
        <div className='flex flex-grow items-center gap-3 bg-[#F2F2F2] p-3'>
          <WaitingList />
          <CallInfoBox />
        </div>
        <CurrentBox />
      </div>
    </div>
  );
}

export default CallContainer;
