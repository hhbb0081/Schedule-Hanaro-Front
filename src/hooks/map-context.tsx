import {
  DEFAULT_ZOOM_LEVEL,
  INITIAL_LATITUDE,
  INITIAL_LONGITUDE,
  MAX_ZOOM_LEVEL,
  MIN_ZOOM_LEVEL,
} from '@/constants';
import { TMap, TMapLatLng, TMapMarker, TMapPolyline } from '@/types';
import {
  createContext,
  PropsWithChildren,
  RefObject,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useReducer,
  useState,
} from 'react';
import { useReverseGeoLocation, useRoutesPedestrain } from './useTmapQuery';
import {
  defaultRoutesPedestrainRequest,
  defaultRoutesPedestrainResponse,
  RoutesPedestrainAction,
  RoutesPedestrainRequest,
  RoutesPedestrainResponse,
} from '@/types/routesPedestrainData';
import { parseRoutesPedestrainResponse } from './parseRoutesPedestrainResponse';
import getMyLocation from './useMyLocation';
import useMarker from './useMarker';
import { defaultMarkers, Markers } from '@/types/markers';
import { PolyLine } from '@/components/Map/Polyline';
import { Coords, defaultCoords } from '@/types/coords';

type MapContextProps = {
  mapRef: RefObject<HTMLDivElement> | null;
  currentAddress: string;
  startAddress: string;
  setStartCoord: (latitude: number, longitude: number) => void;
  setEndCoord: (latitude: number, longitude: number) => void;
  routesPedstrainResponse: RoutesPedestrainResponse | null;
};

const { Tmapv3 } = window;

const MapContext = createContext<MapContextProps>({
  mapRef: null,
  currentAddress: '',
  startAddress: '',
  setStartCoord: () => {},
  setEndCoord: () => {},
  routesPedstrainResponse: null,
});

type MapProviderProps = {
  mapRef: RefObject<HTMLDivElement>;
};

// Routes Pedstrain
const routesPedestrainReducer = (
  data: RoutesPedestrainRequest,
  { type, payload }: RoutesPedestrainAction
) => {
  let routesPedestrainRequest: RoutesPedestrainRequest;
  switch (type) {
    case 'setStartCoord':
      routesPedestrainRequest = { ...data, startCoord: payload };
      break;
    case 'setEndCoord':
      routesPedestrainRequest = { ...data, endCoord: payload };
      break;
    case 'setPath':
      routesPedestrainRequest = { ...data, path: payload };
      break;
  }

  return routesPedestrainRequest;
};

export const MapProvider = ({
  children,
  mapRef,
}: PropsWithChildren<MapProviderProps>) => {
  const [mapInstance, setMapInstance] = useState<TMap | null>(null);
  const [coords, setCoords] = useState<Coords>(defaultCoords);
  const [markers, setMarkers] = useState<Markers>(defaultMarkers);
  const [routesPedestrainData, dispatchRoutesPedestrainData] = useReducer(
    routesPedestrainReducer,
    defaultRoutesPedestrainRequest
  );
  const [routesPedstrainResponse, setRoutesPedestrainResponse] =
    useState<RoutesPedestrainResponse>(defaultRoutesPedestrainResponse);
  const [currentPolyline, setCurrentPolyline] = useState<TMapPolyline | null>(
    null
  );
  // Map 초기 설정
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

  // 현위치 주소 받아오기
  const { data: addressData } = useReverseGeoLocation({
    latitude: coords.currentCoord?.lat() || 0,
    longitude: coords.currentCoord?.lng() || 0,
  });
  const currentAddress = addressData?.addressInfo.fullAddress || '';

  // 출발지 주소 받아오기
  const { data: startAddressData } = useReverseGeoLocation({
    latitude: routesPedestrainData.startCoord?.lat() || 0,
    longitude: routesPedestrainData.startCoord?.lng() || 0,
  });
  const startAddress = startAddressData?.addressInfo.fullAddress || '';

  // 보행자 경로 받아오기
  const { data: routesPedestrainResponse } = useRoutesPedestrain(
    {
      latitude: routesPedestrainData.startCoord?.lat() || 0,
      longitude: routesPedestrainData.startCoord?.lng() || 0,
    },
    {
      latitude: routesPedestrainData.endCoord?.lat() || 0,
      longitude: routesPedestrainData.endCoord?.lng() || 0,
    }
  );

  // 현위치 정보 받아오기 & 현위치 설정
  useEffect(() => {
    getMyLocation(setCurrentCoord);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mapInstance]);

  // 보행자 경로 및 시간, 거리 정보 설정하기
  useEffect(() => {
    if (!routesPedestrainResponse) {
      return;
    }

    const { path, totalDistance, totalTime } = parseRoutesPedestrainResponse(
      routesPedestrainResponse
    );

    setCoords({
      ...coords,
      startCoord: path[0],
      endCoord: path[path.length - 1],
    });

    dispatchRoutesPedestrainData({ type: 'setPath', payload: path });
    setRoutesPedestrainResponse({ totalDistance, totalTime });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [routesPedestrainResponse]);

  const setCurrentCoord = useCallback(
    (latitude: number, longitude: number) => {
      const position = new Tmapv3.LatLng(latitude, longitude);
      setCoords({ ...coords, currentCoord: position });
      if (routesPedestrainData.path.length == 0) {
        mapInstance?.setCenter(position);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [mapInstance]
  );

  const setStartCoord = (latitude: number, longitude: number) => {
    dispatchRoutesPedestrainData({
      type: 'setStartCoord',
      payload: new Tmapv3.LatLng(latitude, longitude),
    });
  };

  const setEndCoord = (latitude: number, longitude: number) => {
    dispatchRoutesPedestrainData({
      type: 'setEndCoord',
      payload: new Tmapv3.LatLng(latitude, longitude),
    });
  };

  const setCurrentMarker = (marker: TMapMarker) => {
    setMarkers({ ...markers, currentMarker: marker });
  };

  const setStartMarker = (marker: TMapMarker) => {
    setMarkers({ ...markers, startMarker: marker });
  };

  const setEndMarker = (marker: TMapMarker) => {
    setMarkers({ ...markers, endMarker: marker });
  };

  const { currentCoord, startCoord, endCoord } = coords;
  const { currentMarker, startMarker, endMarker } = markers;
  useMarker(
    mapInstance,
    currentCoord,
    currentMarker,
    setCurrentMarker,
    'current'
  );
  useMarker(mapInstance, startCoord, startMarker, setStartMarker, 'start');
  useMarker(mapInstance, endCoord, endMarker, setEndMarker, 'end');

  // Polyline 생성 함수
  const makePolyLine = useCallback(
    (tempPath: TMapLatLng[], strokeColor: string, strokeWeight: number) => {
      if (!tempPath.length || !mapInstance) {
        return;
      }
      const startLatitude = tempPath[0]._lat;
      const startLongitude = tempPath[0]._lng;

      currentPolyline?.setMap(null);

      const position = new Tmapv3.LatLng(startLatitude, startLongitude);

      const polyline = PolyLine({
        path: tempPath,
        strokeColor,
        strokeWeight,
        mapContent: mapInstance,
      });
      setCurrentPolyline(polyline);
      mapInstance?.setCenter(position);
    },
    [mapInstance, currentPolyline]
  );

  // Polyline 적용 함수
  useEffect(() => {
    console.log('Polyline1');

    if (!mapRef.current?.firstChild || !mapInstance) return;
    console.log('Polyline2');

    const { startCoord, endCoord, path } = routesPedestrainData;
    console.log('🚀 ~ useEffect ~ path:', path);
    console.log('🚀 ~ useEffect ~ endCoord:', endCoord);
    console.log('🚀 ~ useEffect ~ startCoord:', startCoord);
    if (!startCoord || !endCoord || path.length === 0) {
      return;
    }
    console.log('Polyline3');

    mapInstance.on('ConfigLoad', () => makePolyLine(path, '#3D8BFF', 9));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mapInstance, routesPedestrainData]);

  return (
    <MapContext.Provider
      value={{
        mapRef,
        currentAddress,
        startAddress,
        setStartCoord,
        setEndCoord,
        routesPedstrainResponse,
      }}
    >
      {children}
    </MapContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useMap = () => useContext(MapContext);
