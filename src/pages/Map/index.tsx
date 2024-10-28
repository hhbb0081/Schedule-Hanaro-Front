import { Map } from '@/components';

export function MapPage() {
  // const [currentBranchId, setCurrentBranchId] = useAtom(branchIdAtom);
  // const onClickMarker = (id: string) => {
  //   console.log(id);
  //   if (currentBranchId !== id) setCurrentBranchId(id);
  // };

  return (
    <div className='map'>
      <Map />
    </div>
  );
}
