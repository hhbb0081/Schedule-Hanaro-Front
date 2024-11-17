import { TMapMarker } from './tmap';

export type Markers = {
  currentMarker: TMapMarker | null;
  startPedestrainMarker: TMapMarker | null;
  endPedestrainMarker: TMapMarker | null;
  startAutomobileMarker: TMapMarker | null;
  endAutomobileMarker: TMapMarker | null;
};

export const defaultMarkers: Markers = {
  currentMarker: null,
  startPedestrainMarker: null,
  endPedestrainMarker: null,
  startAutomobileMarker: null,
  endAutomobileMarker: null,
};
