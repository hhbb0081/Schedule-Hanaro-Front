import { TMap, TMapLatLng } from '@/types';

const { Tmapv3 } = window;

type PolyLineProps = {
  path: TMapLatLng[];
  strokeColor: string;
  strokeWeight: number;
  strokeStyle: string;
  mapContent: TMap;
};

export function PolyLine({
  path,
  strokeColor,
  strokeWeight,
  strokeStyle,
  mapContent,
}: PolyLineProps) {
  return new Tmapv3.Polyline({
    path,
    strokeColor,
    strokeWeight,
    strokeStyle,
    map: mapContent,
  });
}
