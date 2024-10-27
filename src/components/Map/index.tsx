import { useEffect, useRef } from 'react';

import dayjs from 'dayjs';
import 'dayjs/locale/ko';

import { MAX_ZOOM_LEVEL } from '@/constants';
import { useMap } from '@/hooks';

import { Marker } from './Marker';

const { Tmapv3 } = window;
dayjs.locale('ko');

type MapProps = {
  onClickMarker: (id: string) => void;
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

type BankListRes = {
  // 큰 수는 BigInt로 표시 했음(string임)
  id: string;
  groupId: string;
  title: string;
  contents: string;
  date: Date;
  maxHumanCount: number;
  address: string;
  latitude: number;
  longitude: number;
  status: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
  group: BankListRes;
};
const testBank1: BankListRes = {
  id: '1',
  groupId: '1',
  title: 'TestTitle',
  contents: 'TestContents',
  date: new Date(),
  maxHumanCount: 1,
  address: 'TestAddress',
  latitude: 37.541443033738986,
  longitude: 127.03916480015602,
  status: 'TestStatus',
  createdAt: new Date(),
  updatedAt: new Date(),
  deletedAt: null,
  group: {} as BankListRes,
};
const testBank2: BankListRes = {
  id: '1',
  groupId: '1',
  title: 'TestTitle',
  contents: 'TestContents',
  date: new Date(),
  maxHumanCount: 1,
  address: 'TestAddress',
  latitude: 37.566491,
  longitude: 126.981867,
  status: 'TestStatus',
  createdAt: new Date(),
  updatedAt: new Date(),
  deletedAt: null,
  group: {} as BankListRes,
};

// const testStart: BankListRes = {
//   id: '1',
//   groupId: '1',
//   title: 'TestTitle',
//   contents: 'TestContents',
//   date: new Date(),
//   maxHumanCount: 1,
//   address: 'TestAddress',
//   latitude: 37.54958997910813,
//   longitude: 127.04632388764902,
//   status: 'TestStatus',
//   createdAt: new Date(),
//   updatedAt: new Date(),
//   deletedAt: null,
//   group: {} as BankListRes,
// };

// const testEnd: BankListRes = {
//   id: '1',
//   groupId: '1',
//   title: 'TestTitle',
//   contents: 'TestContents',
//   date: new Date(),
//   maxHumanCount: 1,
//   address: 'TestAddress',
//   latitude: 37.5472649833669,
//   longitude: 127.04738050398232,
//   status: 'TestStatus',
//   createdAt: new Date(),
//   updatedAt: new Date(),
//   deletedAt: null,
//   group: {} as BankListRes,
// };

const setMyLocation = (makeMarker: UpdateMarker) => {
  const onSuccess = (position: Geolocation) => {
    const { latitude, longitude } = position.coords;
    // 현위치 Marker 생성
    makeMarker({ latitude, longitude }, 'red', '현위치');
  };
  // makeMarker : 함수
  navigator.geolocation.getCurrentPosition(onSuccess);
};

export function Map({ onClickMarker }: MapProps) {
  // Test용 위치 추가 및 기존 코드 삭제
  const bankList = [testBank1, testBank2];

  const mapRef = useRef<HTMLDivElement>(null);
  const { mapInstance, makeMarker } = useMap(mapRef);

  // useEffect(() => {
  //   setStartCoord({
  //     latitude: testStart.latitude,
  //     longitude: testStart.longitude,
  //   });
  //   setEndCoord({
  //     latitude: testEnd.latitude,
  //     longitude: testEnd.longitude,
  //   });
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  const onClickMyLocation = () => {
    setMyLocation(makeMarker);
  };

  // 현위치 Marker 생성
  useEffect(() => {
    onClickMyLocation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mapInstance]);

  // 은행 위치 Marker 생성
  useEffect(() => {
    if (!mapInstance) {
      return;
    }

    bankList?.forEach((bank: BankListRes) => {
      const { id, latitude, longitude } = bank;
      if (latitude && longitude) {
        const position = new Tmapv3.LatLng(latitude, longitude);
        const marker = Marker({
          mapContent: mapInstance,
          position,
          theme: 'green',
          // TODO: 은행 이름으로 변경 필요
          labelText: dayjs(bank.date).format('MM/DD(ddd) HH:mm'),
        });
        marker.on('Click', () => {
          onClickMarker(id);
          // Marker 클릭 시 주소 받아옴
          // setCoord({ latitude, longitude });
          mapInstance.setCenter(position);
          mapInstance.setZoom(MAX_ZOOM_LEVEL);
        });
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bankList]);

  return (
    <div className='container'>
      <div className='map' id='map' ref={mapRef} />
      {/* <MyLocation onClick={onClickMyLocation} /> */}
    </div>
  );
}
