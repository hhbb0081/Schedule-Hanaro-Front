import { TMapMarker } from './tmap';

export type Markers = {
  currentMarker: TMapMarker | null;
  startMarker: TMapMarker | null;
  endMarker: TMapMarker | null;
};

export const defaultMarkers = {
  currentMarker: null,
  startMarker: null,
  endMarker: null,
};
