import MapChips from '@/components/Map/MapChips';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

export function MapLayout() {
  const [selectedChipIdx, setSelectedChipIdx] = useState(0);
  const changeIdx = (id: number) => setSelectedChipIdx(id);
  return (
    <>
      <div className='fixed'>
        {/* TODO: 검색 화면 구현시 SearchInput 설정 */}
        {/* <SearchInput /> */}
        <MapChips value={selectedChipIdx} setValue={changeIdx} />
      </div>
      <Outlet />
    </>
  );
}
