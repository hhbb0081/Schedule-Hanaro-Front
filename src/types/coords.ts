import { TMapLatLng } from './tmap';

export type Coords = {
  currentCoord: TMapLatLng | null;
  startPedestrainCoord: TMapLatLng | null;
  endPedestrainCoord: TMapLatLng | null;
  startAutomobileCoord: TMapLatLng | null;
  endAutomobileCoord: TMapLatLng | null;
  branchCoordList: TMapLatLng[];
};

export const defaultCoords: Coords = {
  currentCoord: null,
  startPedestrainCoord: null,
  endPedestrainCoord: null,
  startAutomobileCoord: null,
  endAutomobileCoord: null,
  branchCoordList: [],
};
