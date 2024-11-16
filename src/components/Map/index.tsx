import { BRANCH_MOCK } from '@/mock/branch_mock';
import { BottomSheet } from '../BottomSheet/BottomSheet';
import BottomFloatingBox from '../Direction/BottomFloatingBox';
import Nav from '../Nav/Nav';
import { useMap } from '@/hooks/map-context';
import { useEffect } from 'react';

export function Map() {
  // Test용 위치 추가 및 기존 코드 삭제
  const branchList = [...BRANCH_MOCK];

  const { mapRef, selectedBranchId, setBranchList } = useMap();

  useEffect(() => {
    setBranchList(branchList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className='map' id='map' ref={mapRef} />
      {selectedBranchId ? (
        <div className='mx-auto w-full'>
          {/* TODO: 검색 화면 구현시 SearchInput 설정 */}
          {/* <SearchInput /> */}
          <div className='navbar fixed bottom-[10rem] z-10 mx-auto flex max-w-[30rem] justify-center'>
            <BottomFloatingBox type='map' branchId={selectedBranchId} />
          </div>
        </div>
      ) : (
        <>
          <BottomSheet />
          <Nav />
        </>
      )}
    </>
  );
}
