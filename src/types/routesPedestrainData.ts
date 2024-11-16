import { TMapLatLng } from './tmap';

// Request
type RoutesPedestrainRequest = {
  startCoord: TMapLatLng | null;
  endCoord: TMapLatLng | null;
  path: TMapLatLng[];
};

const defaultRoutesPedestrainRequest: RoutesPedestrainRequest = {
  startCoord: null,
  endCoord: null,
  path: [],
};

type SetStartCoordAction = {
  type: 'setStartCoord';
  payload: TMapLatLng | null;
};

type SetEndCoordAction = {
  type: 'setEndCoord';
  payload: TMapLatLng | null;
};

type SetPathAction = {
  type: 'setPath';
  payload: TMapLatLng[];
};

type RoutesPedestrainAction =
  | SetPathAction
  | SetStartCoordAction
  | SetEndCoordAction;

// Response
type RoutesPedestrainResponse = {
  totalDistance: number;
  totalTime: number;
};

const defaultRoutesPedestrainResponse: RoutesPedestrainResponse = {
  totalDistance: 0,
  totalTime: 0,
};
export {
  type RoutesPedestrainAction,
  type RoutesPedestrainRequest,
  type RoutesPedestrainResponse,
  defaultRoutesPedestrainRequest,
  defaultRoutesPedestrainResponse,
};
