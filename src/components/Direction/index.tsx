import { useEffect, useRef } from 'react';

import dayjs from 'dayjs';
import 'dayjs/locale/ko';

import { useMap } from '@/hooks';
import { MyLocation } from '../Map/MyLocation';
import TopSheet from '@/components/Direction/topSheet';
import BottomSheet from '@/components/Direction/bottomSheet';
import { useAtom } from 'jotai';
import {
  currentAddressAtom,
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
  theme: 'green' | 'red',
  labelText: string
) => void;

const setMyLocation = (makeMarker: UpdateMarker) => {
  const onSuccess = (position: Geolocation) => {
    const { latitude, longitude } = position.coords;
    // 현위치 Marker 생성
    makeMarker({ latitude, longitude }, 'red', '현위치');
  };
  // makeMarker : 함수
  navigator.geolocation.getCurrentPosition(onSuccess);
};

export function Direction() {
  const [start] = useAtom(startAtom);
  const [end] = useAtom(endAtom);
  const [, setCurrentAddress] = useAtom(currentAddressAtom);
  const [, setTotalTime] = useAtom(totalTimeAtom);
  const [, setTotalDistance] = useAtom(totalDistanceAtom);
  const [mapClick] = useAtom(mapClickAtom);
  const mapRef = useRef<HTMLDivElement>(null);

  const {
    mapInstance,
    makeMarker,
    currentAddress,
    setStartCoord,
    setEndCoord,
    currentTotalTime: time,
    currentTotalDistance: distance,
  } = useMap(mapRef);

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

  useEffect(() => {
    if (!time || !distance) return;

    setTotalTime(time);
    setTotalDistance(distance);
    setCurrentAddress(currentAddress);
  }, [
    distance,
    time,
    currentAddress,
    setTotalTime,
    setTotalDistance,
    setCurrentAddress,
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
