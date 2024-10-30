import { useEffect, useRef } from 'react';

import dayjs from 'dayjs';
import 'dayjs/locale/ko';

import { MAX_ZOOM_LEVEL } from '@/constants';
import { useMap } from '@/hooks';

import { BRANCH_MOCK } from '@/mock/branch_mock';
import { branchIdAtom } from '@/stores';
import { BranchInfo } from '@/types/branch';
import { setMyLocation } from '@/utils';
import { useAtom } from 'jotai';
import { BottomSheet } from '../BottomSheet/BottomSheet';
import BottomFloatingBox from '../Direction/BottomFloatingBox';
import Nav from '../Nav/Nav';
import { Marker } from './Marker';
import { MyLocation } from './MyLocation';

const { Tmapv3 } = window;
dayjs.locale('ko');

export function Map() {
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

  const focusSelectedBranch = (lat: number, lon: number) => {
    if (!mapInstance) return;
    const position = new Tmapv3.LatLng(lat, lon);
    mapInstance.setCenter(position);
    mapInstance.setZoom(MAX_ZOOM_LEVEL);
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

    branchList.forEach(
      ({
        id,
        name,
        position_x: longitude,
        position_y: latitude,
        type,
      }: BranchInfo) => {
        if (latitude && longitude) {
          console.log(type);
          const position = new Tmapv3.LatLng(+latitude, +longitude);
          const marker = Marker({
            mapContent: mapInstance,
            position,
            theme: type,
            labelText: name,
          });
          marker.on('Click', () => {
            onClickMarker(id);
            focusSelectedBranch(position._lat, position._lng);
          });
        }
      }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mapInstance]);

  return (
    <div className='container'>
      <div className='map' id='map' ref={mapRef} />
      {currentBranchId ? (
        <div className='mx-auto w-full'>
          {/* TODO: 검색 화면 구현시 SearchInput 설정 */}
          {/* <SearchInput /> */}
          <div className='navbar fixed bottom-[10rem] z-10 mx-auto flex max-w-[30rem] justify-center'>
            <MyLocation onClick={onClickMyLocation} />
            <BottomFloatingBox type='map' />
          </div>
        </div>
      ) : (
        <>
          <BottomSheet
            currentAddress={currentAddress}
            focusSelectedBranch={focusSelectedBranch}
          />
          <Nav />
        </>
      )}
    </div>
  );
}
