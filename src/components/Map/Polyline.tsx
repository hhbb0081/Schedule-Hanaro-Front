import { TMap, TMapLatLng } from '@/types';

const { Tmapv3 } = window;

type PolyLineProps = {
  path: TMapLatLng[];
  strokeColor: string;
  strokeWeight: number;
  mapContent: TMap;
};

export function PolyLine({
  path,
  strokeColor,
  strokeWeight,
  mapContent,
}: PolyLineProps) {
  return new Tmapv3.Polyline({
    path,
    strokeColor,
    strokeWeight,
    strokeOpacity: 1,
    direction: true,
    map: mapContent,
  });
}
