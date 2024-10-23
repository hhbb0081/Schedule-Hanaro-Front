import InfoCard from '@/components/Admin/Infocard';
import Next from '../../../components/Admin/Next';

function VisitPage() {
  return (
    <div className='mx-6 mt-6'>
      <InfoCard waitingCount={2} estimatedTime={15} todayVisitors={72} />
      <Next />
    </div>
  );
}

export default VisitPage;
