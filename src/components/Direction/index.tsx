import { useEffect } from 'react';

import dayjs from 'dayjs';
import 'dayjs/locale/ko';

import BottomFloatingBox from '@/components/Direction/BottomFloatingBox';
import TopSheet from '@/components/Direction/TopSheet';
import { useNavigate } from 'react-router-dom';
import { Toaster } from '../ui/toaster';
import { useMap } from '@/hooks/map-context';

dayjs.locale('ko');

type DirectionProps = {
  startLat: string;
  startLon: string;
  endLat: string;
  endLon: string;
  branchId: string;
};

export function Direction({
  startLat,
  startLon,
  endLat,
  endLon,
  branchId,
}: DirectionProps) {
  const navigate = useNavigate();

  const { mapRef, mapFocusOnly, setStartCoord, setEndCoord } = useMap();

  // 출발지 & 도착지 설정
  useEffect(() => {
    if (!startLat || !endLat) {
      return;
    }

    setStartCoord(+startLat, +startLon);
    setEndCoord(+endLat, +endLon);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startLat, endLat]);

  const closeDirection = () => {
    // showToast(toast, '길 안내를 종료합니다.');
    navigate('/map');
  };

  return (
    <>
      <div className='flex w-full flex-col items-center'>
        {!mapFocusOnly && (
          <>
            <TopSheet
              closeDirection={closeDirection}
              branchId={branchId}
            ></TopSheet>
            <BottomFloatingBox type='dir' branchId={branchId} />
          </>
        )}

        {/* <div className='navbar fixed bottom-[20.5rem] z-10 mx-auto flex w-[30rem] justify-end'>
          <MyLocation onClick={onClickMyLocation} />
        </div> */}
      </div>

      <div className='map' id='map' ref={mapRef} />
      <Toaster />
    </>
  );
}
