import { Separator } from '@/components/ui/separator';
import { BRANCH_MOCK } from '@/mock/branch_mock';
import { bankIdAtom, currentAddressAtom } from '@/stores';
import { useAtom } from 'jotai';

export default function DepartureArrivalAddress() {
  const [currentAddress] = useAtom(currentAddressAtom);
  const [bankId] = useAtom(bankIdAtom);
  const bankIdx = BRANCH_MOCK.findIndex((bank) => bank.id === bankId);

  return (
    <div className='flex flex-col justify-between gap-1 text-left'>
      <div className='flex flex-col'>
        <div className='text-xs text-gray-400'>출발지</div>
        <div className='font-bold'>{currentAddress || ''}</div>
      </div>

      <Separator />
      <div className='flex flex-col'>
        <div className='text-xs text-gray-400'>도착지</div>
        <div className='font-bold'>
          {bankIdx === -1 ? '' : BRANCH_MOCK[bankIdx].name}
        </div>
      </div>
    </div>
  );
}
