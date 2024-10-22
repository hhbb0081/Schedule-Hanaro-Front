import { useCallback, useEffect, useLayoutEffect, useState } from 'react';

import { keepPreviousData, useQuery } from '@tanstack/react-query';

import { Marker } from '@/components/Map/Marker';
import {
  DEFAULT_ZOOM_LEVEL,
  MAX_ZOOM_LEVEL,
  MIN_ZOOM_LEVEL,
  INITIAL_LATITUDE,
  INITIAL_LONGITUDE,
} from '@/constants';
import { queryKeys } from '@/queries';
import { TMap, TMapEvent, TMapLatLng, TMapMarker, TMapPolyline } from '@/types';
import { PolyLine } from '@/components/Map/Polyline';

const { Tmapv3 } = window;

export const useMap = (
  mapRef: React.RefObject<HTMLDivElement>,
  useOnClick: boolean = false
) => {
  const [mapInstance, setMapInstance] = useState<TMap | null>(null);
  const [currentPath, setCurrentPath] = useState<TMapLatLng[]>([]);
  const [currentTotalDistance, setCurrentTotalDistance] = useState<
    number | null
  >(null);
  const [currentTotalTime, setCurrentTotalTime] = useState<number | null>(null);
  const [currentMarker, setCurrentMarker] = useState<TMapMarker | null>(null);
  const [currentStartMarker, setCurrentStartMarker] =
    useState<TMapMarker | null>(null);
  const [currentEndMarker, setCurrentEndMarker] = useState<TMapMarker | null>(
    null
  );
  const [currentCoord, setCurrentCoord] = useState<TMapLatLng | null>(null);
  const [currentStartCoord, setCurrentStartCoord] = useState<TMapLatLng | null>(
    null
  );
  const [currentEndCoord, setCurrentEndCoord] = useState<TMapLatLng | null>(
    null
  );
  const [currentPolyline, setCurrentPolyline] = useState<TMapPolyline | null>(
    null
  );

  // coord 초기화
  const coord = {
    latitude: currentCoord?.lat() || 0,
    longitude: currentCoord?.lng() || 0,
  };
  const startCoord = {
    latitude: currentStartCoord?.lat() || 0,
    longitude: currentStartCoord?.lng() || 0,
  };
  const endCoord = {
    latitude: currentEndCoord?.lat() || 0,
    longitude: currentEndCoord?.lng() || 0,
  };
  // =======================================

  // 좌표 -> 주소 변환 Query
  // const { data: addressData } = useQuery({
  //   ...queryKeys.tmap.getAddressFromCoord({
  //     latitude: coord.latitude,
  //     longitude: coord.longitude,
  //   }),

  //   placeholderData: keepPreviousData,
  // });
  // const currentAddress = addressData?.addressInfo.fullAddress || '';

  // 보행자 경로 Query
  const { data: pathData } = useQuery({
    ...queryKeys.tmap.getRoutesPedestrain({
      startLatitude: startCoord.latitude,
      startLongitude: startCoord.longitude,
      endLatitude: endCoord.latitude,
      endLongitude: endCoord.longitude,
      startName: '출발지',
      endName: '목적지',
    }),

    placeholderData: keepPreviousData,
  });

  useEffect(() => {
    console.log('🚀 ~ useEffect ~ pathData:', pathData);
    if (!pathData) {
      return;
    }

    const tempPath: TMapLatLng[] = [];
    const featureData = pathData?.features;
    featureData?.forEach(({ geometry }) => {
      if (geometry.type === 'LineString') {
        geometry.coordinates.forEach(([longitude, latitude]) =>
          tempPath.push(new Tmapv3.LatLng(latitude, longitude))
        );
      }
    });
    const { totalDistance } = featureData[0].properties;
    const { totalTime } = featureData[0].properties;

    if (comparePolylinePath(tempPath, currentPath)) {
      return;
    }

    setCurrentPath(tempPath);
    setCurrentTotalDistance(totalDistance);
    setCurrentTotalTime(totalTime);
  }, [pathData, currentPath]);

  // =======================================

  // currentCoord 위치에 Marker 생성 및 currentMarker로 지정
  useEffect(() => {
    if (!currentCoord) {
      return;
    }

    const makeMarker = (position: TMapLatLng) => {
      if (!mapInstance) {
        return;
      }

      currentMarker?.setMap(null);

      const marker = Marker({
        mapContent: mapInstance,
        position,
        theme: 'green',
      });

      setCurrentMarker(marker);
    };

    makeMarker(currentCoord);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentCoord, mapInstance]);

  // currentStartCoord 위치에 Marker 생성 및 currentStartMarker로 지정
  useEffect(() => {
    if (!currentStartCoord) {
      return;
    }

    const makeMarker = (position: TMapLatLng) => {
      if (!mapInstance) {
        return;
      }

      currentStartMarker?.setMap(null);

      const marker = Marker({
        mapContent: mapInstance,
        position,
        theme: 'green',
        labelText: '출발지',
      });

      setCurrentStartMarker(marker);
    };

    makeMarker(currentStartCoord);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentStartCoord, mapInstance]);

  // currentEndCoord 위치에 Marker 생성 및 currentEndMarker로 지정
  useEffect(() => {
    if (!currentEndCoord) {
      return;
    }

    const makeMarker = (position: TMapLatLng) => {
      if (!mapInstance) {
        return;
      }

      currentEndMarker?.setMap(null);

      const marker = Marker({
        mapContent: mapInstance,
        position,
        theme: 'green',
        labelText: '도착지',
      });

      setCurrentEndMarker(marker);
    };

    makeMarker(currentEndCoord);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentEndCoord, mapInstance]);

  // currentStartCoord와 currentEndCorrd
  useEffect(() => {
    if (!mapRef.current?.firstChild || !mapInstance) return;

    if (!currentStartCoord || !currentEndCoord || currentPath.length === 0) {
      return;
    }

    mapInstance.on('ConfigLoad', () => makePolyLine(currentPath, '#191970', 9));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentCoord, mapInstance, currentPath]);

  // map 설정
  useLayoutEffect(() => {
    if (mapRef.current?.firstChild || mapInstance) {
      return;
    }

    const map = new Tmapv3.Map('map', {
      center: new Tmapv3.LatLng(INITIAL_LATITUDE, INITIAL_LONGITUDE),
      zoom: DEFAULT_ZOOM_LEVEL,
      zoomControl: false,
    });

    map.setZoomLimit(MIN_ZOOM_LEVEL, MAX_ZOOM_LEVEL);
    setMapInstance(map);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mapRef]);
  // }, [mapRef, mapInstance]);

  // onClick true로 설정 시 지도 선택시 currentCoord 위치 변경
  useEffect(() => {
    if (!mapInstance || !useOnClick) {
      return;
    }

    const renderMarker = (e: TMapEvent) => {
      const { lngLat } = e.data;
      const position = new Tmapv3.LatLng(lngLat._lat, lngLat._lng);

      setCurrentCoord(position);
    };

    mapInstance.on('Click', renderMarker);
  }, [mapInstance, currentCoord, useOnClick]);

  // currentCoord 변경
  const updateMarker = useCallback(
    (tempCoord: {
      latitude: number | undefined;
      longitude: number | undefined;
    }) => {
      const { latitude, longitude } = tempCoord;
      if (!(latitude && longitude) || !mapInstance) {
        return;
      }

      const position = new Tmapv3.LatLng(latitude, longitude);

      setCurrentCoord(position);
      mapInstance?.setCenter(position);
    },
    [mapInstance]
  );

  // marker 생성 및 currentMarker 설정
  const makeMarker = useCallback(
    (
      tempCoord: { latitude: number | null; longitude: number | null },
      theme: 'green' | 'red',
      labelText?: string
    ) => {
      const { latitude, longitude } = tempCoord;
      if (!(latitude && longitude) || !mapInstance) {
        return;
      }

      if (currentMarker) {
        const currMarker = currentMarker.getPosition();
        const prevLatitude = currMarker._lat;
        const prevLongitude = currMarker._lng;
        if (prevLatitude === latitude && prevLongitude === longitude) {
          mapInstance?.setCenter(new Tmapv3.LatLng(latitude, longitude));
          mapInstance?.setZoom(DEFAULT_ZOOM_LEVEL);
          return;
        }
      }

      currentMarker?.setMap(null);
      const position = new Tmapv3.LatLng(latitude, longitude);

      const marker = Marker({
        mapContent: mapInstance,
        position,
        theme,
        labelText,
      });
      setCurrentMarker(marker);
      mapInstance?.setCenter(position);
    },
    [mapInstance, currentMarker]
  );

  const comparePolylinePath = (
    prevPath: TMapLatLng[],
    currPath: TMapLatLng[]
  ) => {
    if (prevPath.length !== currPath.length) return false;

    for (let i = 0; i < prevPath.length; i += 1) {
      const prevLatitude = prevPath[i]._lat;
      const prevLongitude = prevPath[i]._lat;
      const currLatitude = currPath[i]._lat;
      const currLongitude = currPath[i]._lat;
      if (prevLatitude !== currLatitude || prevLongitude !== currLongitude) {
        return false;
      }
    }

    return true;
  };

  // TODO:
  const makePolyLine = useCallback(
    (tempPath: TMapLatLng[], strokeColor: string, strokeWeight: number) => {
      if (!tempPath.length || !mapInstance) {
        return;
      }
      const startLatitude = tempPath[0]._lat;
      const startLongitude = tempPath[0]._lng;

      if (currentPolyline) {
        const currPolylinePath = currentPolyline.getPath();
        if (comparePolylinePath(currPolylinePath, tempPath)) {
          mapInstance?.setCenter(
            new Tmapv3.LatLng(startLatitude, startLongitude)
          );
          mapInstance?.setZoom(DEFAULT_ZOOM_LEVEL);
          return;
        }
      }

      currentPolyline?.setMap(null);

      const position = new Tmapv3.LatLng(startLatitude, startLongitude);

      const polyline = PolyLine({
        path: tempPath,
        strokeColor,
        strokeWeight,
        strokeStyle: 'solid',
        mapContent: mapInstance,
      });
      setCurrentPolyline(polyline);
      mapInstance?.setCenter(position);
    },
    [mapInstance, currentPolyline]
  );

  const setCenterToSelectedCoord = (position: TMapLatLng) => {
    mapInstance?.setCenter(position);
  };

  // currentCoord 설정 및 중앙 설정
  const setCoord = (currCoord: { latitude: number; longitude: number }) => {
    const position = new Tmapv3.LatLng(currCoord.latitude, currCoord.longitude);
    setCurrentCoord(position);
    setCenterToSelectedCoord(position);
  };

  // currentCoord 설정 및 중앙 설정
  const setStartCoord = (startCoord: {
    latitude: number;
    longitude: number;
  }) => {
    const position = new Tmapv3.LatLng(
      startCoord.latitude,
      startCoord.longitude
    );
    setCurrentStartCoord(position);
  };

  const setEndCoord = (endCoord: { latitude: number; longitude: number }) => {
    const position = new Tmapv3.LatLng(endCoord.latitude, endCoord.longitude);
    setCurrentEndCoord(position);
  };

  const initMapModal = () => {
    currentMarker?.setMap(null);
    setCurrentCoord(null);
    setCurrentMarker(null);
    setCurrentPolyline(null);
  };

  return {
    mapInstance,
    updateMarker,
    makeMarker,
    makePolyLine,
    currentMarker,
    // currentAddress,
    currentPath,
    currentTotalDistance,
    currentTotalTime,
    coord,
    setCoord,
    setStartCoord,
    setEndCoord,
    initMapModal,
  };
};
