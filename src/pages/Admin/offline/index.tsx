// VisitPage.tsx
import InfoCard from '@/components/Admin/Infocard';
import WaitingNumber from '@/components/Admin/WaitingNum';
import { useState } from 'react';
import Next from '../../../components/Admin/Next';

function VisitPage() {
  const [numbers, setNumbers] = useState([
    952, 953, 954, 955, 956, 957, 958, 951,
  ]);
  const [angle, setAngle] = useState(0);
  const [displayNum, setDisplayNum] = useState([7, 0, 1]);

  const rotateAngle = 360 / 8;

  const handleNext = () => {
    setNumbers((prevNumbers) => {
      if (prevNumbers.length === 0) return prevNumbers;
      const lastNumber = prevNumbers[prevNumbers.length - 1];
      return [lastNumber, ...prevNumbers.slice(0, prevNumbers.length - 1)];
    });
    setNumbers((prevNumbers) => {
      return prevNumbers.map((num) => num + 1);
    });
    setAngle((prev) => prev + rotateAngle);

    setDisplayNum((prevNumbers) =>
      prevNumbers.map((num) => (num + 1 > 7 ? 0 : num + 1))
    );
  };

  return (
    <div className='relative mt-[6.25rem] w-[50%] max-w-screen-lg'>
      <div className='left-[15%] right-[15%]'>
        <Next onClick={handleNext} />
      </div>
      <div className='mb-[3rem] mt-[3rem]'>
        <WaitingNumber
          numbers={numbers}
          angle={angle}
          displayNum={displayNum}
        />
      </div>
      <InfoCard waitingCount={2} estimatedTime={15} todayVisitors={72} />
    </div>
  );
}

export default VisitPage;
