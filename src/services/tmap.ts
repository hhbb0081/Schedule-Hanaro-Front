import axios from 'axios';

import { TMAP_API_KEY } from '@/constants';
import {
  TmapResponse,
  TmapReverseGeocodingResponse,
  TmapRouteResponse,
} from '@/types';

export const tmap = {
  host: 'https://apis.openapi.sk.com/tmap',
  endPoint: {
    pois: '/pois',
    reverseGeocoding: '/geo/reversegeocoding',
    routesPedestrain: '/routes/pedestrian',
    routesAutomobile: '/routes',
  },

  searchAddress: async ({ searchKeyword }: { searchKeyword: string }) => {
    const options = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        appKey: TMAP_API_KEY,
      },
    };
    const searchOptions = {
      version: '1',
      searchKeyword,
      searchType: 'all',
      searchtypCd: 'A', // 검색 결과 정렬 정확도순
      page: '1',
      count: '20',
    };
    const queryString = new URLSearchParams(searchOptions).toString();

    const { data } = await axios.get<TmapResponse>(
      `${tmap.host}${tmap.endPoint.pois}?${queryString}`,
      options
    );
    return data;
  },

  getAddressFromCoord: async ({
    latitude,
    longitude,
  }: {
    latitude: number;
    longitude: number;
  }) => {
    const options = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        appKey: TMAP_API_KEY,
      },
    };
    const searchOptions = {
      version: '1',
      lat: latitude.toString(),
      lon: longitude.toString(),
      // addressType: 'A04', // 새 주소
    };
    const queryString = new URLSearchParams(searchOptions).toString();

    const { data } = await axios.get<TmapReverseGeocodingResponse>(
      `${tmap.host}${tmap.endPoint.reverseGeocoding}?${queryString}`,
      options
    );
    return data;
  },

  getRoutesPedestrain: async ({
    startLatitude,
    startLongitude,
    endLatitude,
    endLongitude,
    startName,
    endName,
  }: {
    startLatitude: number;
    startLongitude: number;
    endLatitude: number;
    endLongitude: number;
    startName: string;
    endName: string;
  }) => {
    const options = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        appKey: TMAP_API_KEY,
      },
    };
    const searchOptions = {
      version: '1',
    };
    const queryString = new URLSearchParams(searchOptions).toString();
    const body = {
      startX: startLongitude,
      startY: startLatitude,
      endX: endLongitude,
      endY: endLatitude,
      startName,
      endName,
    };

    const { data } = await axios.post<TmapRouteResponse>(
      `${tmap.host}${tmap.endPoint.routesPedestrain}?${queryString}`,
      body,
      options
    );
    return data;
  },

  getRoutesAutomobile: async ({
    startLatitude,
    startLongitude,
    endLatitude,
    endLongitude,
  }: {
    startLatitude: number;
    startLongitude: number;
    endLatitude: number;
    endLongitude: number;
  }) => {
    const options = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        appKey: TMAP_API_KEY,
      },
    };
    const searchOptions = {
      version: '1',
    };
    const queryString = new URLSearchParams(searchOptions).toString();
    const body = {
      startX: startLongitude,
      startY: startLatitude,
      endX: endLongitude,
      endY: endLatitude,
    };

    const { data } = await axios.post<TmapRouteResponse>(
      `${tmap.host}${tmap.endPoint.routesAutomobile}?${queryString}`,
      body,
      options
    );
    return data;
  },
};
