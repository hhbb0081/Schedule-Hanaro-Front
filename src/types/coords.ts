import { TMapLatLng } from './tmap';

export type Coords = {
  currentCoord: TMapLatLng | null;
  startCoord: TMapLatLng | null;
  endCoord: TMapLatLng | null;
  branchCoordList: TMapLatLng[];
};

export const defaultCoords = {
  currentCoord: null,
  startCoord: null,
  endCoord: null,
  branchCoordList: [],
};
