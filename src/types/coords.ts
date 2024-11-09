import { TMapLatLng } from './tmap';

export type Coords = {
  currentCoord: TMapLatLng | null;
  startCoord: TMapLatLng | null;
  endCoord: TMapLatLng | null;
};

export const defaultCoords = {
  currentCoord: null,
  startCoord: null,
  endCoord: null,
};
