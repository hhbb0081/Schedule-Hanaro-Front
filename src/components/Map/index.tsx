import { useEffect, useRef } from 'react';

import dayjs from 'dayjs';
import 'dayjs/locale/ko';

import { MAX_ZOOM_LEVEL } from '@/constants';
import { useMap } from '@/hooks';

import { BRANCH_MOCK } from '@/mock/branch_mock';
import { branchIdAtom } from '@/stores';
import { setMyLocation } from '@/utils';
import { useAtom } from 'jotai';
import { BottomSheet } from '../BottomSheet/BottomSheet';
import BottomFloatingSheet from '../Direction/BottomFloatingSheet';
import Nav from '../Nav/Nav';
import { Marker } from './Marker';
import { MyLocation } from './MyLocation';

const { Tmapv3 } = window;
dayjs.locale('ko');

// type MapProps = {
//   onClickMarker: (id: string) => void;
// };

type BankListRes = {
  address: string;
  // category_group_code: string;
  // category_group_name: string;
  // category_name: string;
  distance: string;
  id: string;
  tel: string;
  name: string;
  // place_url: string;
  driving_directions: string;
  position_x: string;
  position_y: string;
  business_hours: string;
};

export function Map() {
  // { onClickMarker }: MapProps
  // Test용 위치 추가 및 기존 코드 삭제
  const branchList = [...BRANCH_MOCK];
  const [currentBranchId, setCurrentBranchId] = useAtom(branchIdAtom);
  const onClickMarker = (id: string) => {
    console.log(id);
    if (currentBranchId !== id) setCurrentBranchId(id);
  };

  const mapRef = useRef<HTMLDivElement>(null);
  const { mapInstance, currentAddress, setCoord } = useMap(mapRef);

  useEffect(() => {
    // TODO:
    // current Address를 여기서 전역상태로 저장해서 다른 컴포넌트에서 사용
    console.log('🚀 ~ Map ~ currentAddress:', currentAddress);
  }, [currentAddress]);

  const onClickMyLocation = () => {
    setMyLocation(setCoord);
  };

  // 현위치 Marker 생성
  useEffect(() => {
    onClickMyLocation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mapInstance]);

  // 은행 위치 Marker 생성
  useEffect(() => {
    console.log(BRANCH_MOCK);
    console.log(mapInstance);
    if (!mapInstance) {
      return;
    }

    branchList.forEach((bank: BankListRes) => {
      const { id, name, position_x: longitude, position_y: latitude } = bank;
      if (latitude && longitude) {
        const position = new Tmapv3.LatLng(+latitude, +longitude);
        const marker = Marker({
          mapContent: mapInstance,
          position,
          theme: 'green',
          // TODO: 은행 이름으로 변경 필요
          labelText: name,
        });
        marker.on('Click', () => {
          onClickMarker(id);
          // Marker 클릭 시 주소 받아옴
          // setCoord({ latitude, longitude });
          mapInstance.setCenter(position);
          mapInstance.setZoom(MAX_ZOOM_LEVEL);
          // if (currentBranchId !== id) {
          //   setCurrentBranchId(id);
          //   console.log(id, '번 지점 select');
          // }
        });
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mapInstance]);

  return (
    <div className='container'>
      <div className='map' id='map' ref={mapRef} />
      <div className='navbar fixed bottom-[16.5rem] z-10 mx-auto flex w-[26rem] justify-end'>
        <MyLocation onClick={onClickMyLocation} />
      </div>
      {currentBranchId ? (
        <div className='mx-auto w-full'>
          <BottomFloatingSheet />
        </div>
      ) : (
        <>
          <BottomSheet currentAddress={currentAddress} />
          <Nav />
        </>
      )}
    </div>
  );
}
