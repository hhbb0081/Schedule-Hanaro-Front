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
  payload: TMapLatLng;
};

type SetEndCoordAction = {
  type: 'setEndCoord';
  payload: TMapLatLng;
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
  totalDistance: number | null;
  totalTime: number | null;
};

const defaultRoutesPedestrainResponse: RoutesPedestrainResponse = {
  totalDistance: null,
  totalTime: null,
};
export {
  type RoutesPedestrainAction,
  type RoutesPedestrainRequest,
  type RoutesPedestrainResponse,
  defaultRoutesPedestrainRequest,
  defaultRoutesPedestrainResponse,
};
