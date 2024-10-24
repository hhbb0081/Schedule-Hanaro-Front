import { useEffect, useRef } from 'react';

import dayjs from 'dayjs';
import 'dayjs/locale/ko';

import { useMap } from '@/hooks';
import { MyLocation } from '../Map/MyLocation';
import TopSheet from '@/pages/Direction/topSheet';
import BottomSheet from '@/pages/Direction/bottomSheet';

dayjs.locale('ko');

type DirectionProps = {
  start: { latitude: number; longitude: number };
  end: { latitude: number; longitude: number };
};
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

export function Direction({ start, end }: DirectionProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const { mapInstance, makeMarker, setStartCoord, setEndCoord } =
    useMap(mapRef);

  useEffect(() => {
    setStartCoord({
      latitude: start.latitude,
      longitude: start.longitude,
    });
    setEndCoord({
      latitude: end.latitude,
      longitude: end.longitude,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onClickMyLocation = () => {
    setMyLocation(makeMarker);
  };

  // 현위치 Marker 생성
  useEffect(() => {
    onClickMyLocation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mapInstance]);

  return (
    <div className='container'>
      <div className='flex flex-col items-center'>
        <TopSheet></TopSheet>
        <BottomSheet></BottomSheet>
      </div>

      <div className='map' id='map' ref={mapRef} />
      <MyLocation onClick={onClickMyLocation} />
    </div>
  );
}
