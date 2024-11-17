import { TMapLatLng } from './tmap';

// Request
type RoutesRequest = {
  startCoord: TMapLatLng | null;
  endCoord: TMapLatLng | null;
  pathPedestrain: TMapLatLng[];
  pathAutomobile: TMapLatLng[];
};

const defaultRoutesRequest: RoutesRequest = {
  startCoord: null,
  endCoord: null,
  pathPedestrain: [],
  pathAutomobile: [],
};

type SetStartCoordAction = {
  type: 'setStartCoord';
  payload: TMapLatLng | null;
};

type SetEndCoordAction = {
  type: 'setEndCoord';
  payload: TMapLatLng | null;
};

type SetPathPedestrainAction = {
  type: 'setPathPedestrain';
  payload: TMapLatLng[];
};

type SetPathAutomobileAction = {
  type: 'setPathAutomobile';
  payload: TMapLatLng[];
};

type RoutesAction =
  | SetPathPedestrainAction
  | SetPathAutomobileAction
  | SetStartCoordAction
  | SetEndCoordAction;

// Response
type RoutesResponse = {
  totalDistance: number;
  totalTime: number;
};

const defaultRoutesResponse: RoutesResponse = {
  totalDistance: 0,
  totalTime: 0,
};
export {
  type RoutesAction,
  type RoutesRequest,
  type RoutesResponse,
  defaultRoutesRequest,
  defaultRoutesResponse,
};
