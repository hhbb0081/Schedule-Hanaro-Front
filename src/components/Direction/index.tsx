import { useEffect, useRef } from 'react';

import dayjs from 'dayjs';
import 'dayjs/locale/ko';

import { useMap } from '@/hooks';
import { MyLocation } from '../Map/MyLocation';
import TopSheet from '@/components/Direction/TopSheet';
import BottomSheet from '@/components/Direction/BottomFloatingBox';
import { useAtom } from 'jotai';
import {
  currentStartAddressAtom,
  endAtom,
  mapClickAtom,
  startAtom,
  totalDistanceAtom,
  totalTimeAtom,
} from '@/stores';

dayjs.locale('ko');

type Geolocation = {
  coords: {
    latitude: number;
    longitude: number;
  };
};
type UpdateMarker = (
  coord: {
    latitude: number | null;
    longitude: number | null;
  },
  theme: 'green' | 'red' | 'current',
  labelText?: string
) => void;

const setMyLocation = (makeMarker: UpdateMarker) => {
  const onSuccess = (position: Geolocation) => {
    const { latitude, longitude } = position.coords;
    // 현위치 Marker 생성
    makeMarker({ latitude, longitude }, 'current');
  };
  // makeMarker : 함수
  navigator.geolocation.getCurrentPosition(onSuccess);
};

export function Direction() {
  const [start] = useAtom(startAtom);
  const [end] = useAtom(endAtom);
  const [, setCurrentStartAddress] = useAtom(currentStartAddressAtom);
  const [, setTotalTime] = useAtom(totalTimeAtom);
  const [, setTotalDistance] = useAtom(totalDistanceAtom);
  const [mapClick] = useAtom(mapClickAtom);
  const mapRef = useRef<HTMLDivElement>(null);

  const {
    mapInstance,
    makeMarker,
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
    setMyLocation(makeMarker);
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

  return (
    <div className='container'>
      <div className='flex flex-col items-center'>
        {!mapClick && (
          <>
            <TopSheet></TopSheet>
            <BottomSheet></BottomSheet>
          </>
        )}
        <div className='navbar fixed bottom-[16.5rem] z-10 mx-auto flex w-[26rem] justify-end'>
          <MyLocation onClick={onClickMyLocation} />
        </div>
      </div>

      <div className='map' id='map' ref={mapRef} />
    </div>
  );
}
