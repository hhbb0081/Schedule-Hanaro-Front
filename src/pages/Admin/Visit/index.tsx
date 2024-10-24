import InfoCard from '@/components/Admin/Infocard';
import Next from '../../../components/Admin/Next';
import WaitingNumber from '@/components/Admin/WaitingNum';

function VisitPage() {
  return (
    <div className='relative mx-[1.5rem] w-[90%]'>
      <InfoCard waitingCount={2} estimatedTime={15} todayVisitors={72} />
      <WaitingNumber />
      <div className='absolute bottom-[-6.25rem] left-[15%] right-[15%]'>
        <Next />
      </div>
    </div>
  );
}

export default VisitPage;
