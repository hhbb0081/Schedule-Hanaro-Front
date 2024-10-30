import { useEffect, useRef } from 'react';

import dayjs from 'dayjs';
import 'dayjs/locale/ko';

import BottomFloatingBox from '@/components/Direction/BottomFloatingBox';
import TopSheet from '@/components/Direction/TopSheet';
import { useMap } from '@/hooks';
import {
  currentStartAddressAtom,
  endAtom,
  mapClickAtom,
  startAtom,
  totalDistanceAtom,
  totalTimeAtom,
} from '@/stores';
import { setMyLocation } from '@/utils';
import { useAtomValue, useSetAtom } from 'jotai';
import { useNavigate } from 'react-router-dom';
import { MyLocation } from '../Map/MyLocation';

dayjs.locale('ko');

export function Direction() {
  const start = useAtomValue(startAtom);
  const end = useAtomValue(endAtom);
  const setCurrentStartAddress = useSetAtom(currentStartAddressAtom);
  const setTotalTime = useSetAtom(totalTimeAtom);
  const setTotalDistance = useSetAtom(totalDistanceAtom);
  const mapClick = useAtomValue(mapClickAtom);
  const mapRef = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();

  const {
    mapInstance,
    setCoord,
    currentStartAddress,
    setStartCoord,
    setEndCoord,
    currentTotalTime: time,
    currentTotalDistance: distance,
  } = useMap(mapRef);

  // 출발지 & 도착지 설정
  useEffect(() => {
    if (!start || !end) return;

    setStartCoord({
      latitude: start.latitude,
      longitude: start.longitude,
    });
    setEndCoord({
      latitude: end.latitude,
      longitude: end.longitude,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [end, start]);

  const onClickMyLocation = () => {
    setMyLocation(setCoord);
  };

  // 현위치 Marker 생성
  useEffect(() => {
    onClickMyLocation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mapInstance]);

  // 소요시간 & 거리 설정
  useEffect(() => {
    if (!time || !distance) return;

    setTotalTime(time);
    setTotalDistance(distance);
    setCurrentStartAddress(currentStartAddress);
  }, [
    distance,
    time,
    currentStartAddress,
    setTotalTime,
    setTotalDistance,
    setCurrentStartAddress,
  ]);

  const closeDirection = () => {
    navigate('/map');
  };

  return (
    <div className='container'>
      <div className='flex w-full flex-col items-center'>
        {!mapClick && (
          <>
            <TopSheet closeDirection={closeDirection}></TopSheet>
            <BottomFloatingBox type='dir' />
          </>
        )}
        <div className='navbar fixed bottom-[20.5rem] z-10 mx-auto flex w-[30rem] justify-end'>
          <MyLocation onClick={onClickMyLocation} />
        </div>
      </div>

      <div className='map' id='map' ref={mapRef} />
    </div>
  );
}
