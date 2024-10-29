import MapChips from '@/components/Map/MapChips';
import { SearchInput } from '@/components/ui/searchInput';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

export function MapLayout() {
  const [selectedChipIdx, setSelectedChipIdx] = useState(0);
  const changeIdx = (id: number) => setSelectedChipIdx(id);
  return (
    <>
      <div className='fixed'>
        <SearchInput />
        <MapChips value={selectedChipIdx} setValue={changeIdx} />
      </div>
      <Outlet />
    </>
  );
}
