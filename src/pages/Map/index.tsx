import { Map } from '@/components';
import BottomFloatingSheet from '@/components/Direction/BottomFloatingSheet';
import { branchIdAtom } from '@/stores';
import { useAtom } from 'jotai';

export function MapPage() {
  const [currentBranchId, setCurrentBranchId] = useAtom(branchIdAtom);
  const onClickMarker = (id: string) => {
    console.log(id);
    if (currentBranchId !== id) setCurrentBranchId(id);
  };

  return (
    <div className='map'>
      <Map onClickMarker={onClickMarker} />
      {currentBranchId && <BottomFloatingSheet />}
    </div>
  );
}
