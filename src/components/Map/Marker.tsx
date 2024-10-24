// import markermyGreen from '@/assets/icons/marker-my-green.svg';
import markerMyRed from '@/assets/icons/marker-my-red.svg';
import markerMyBlue from '@/assets/icons/marker-blue.svg';
import markerStart from '@/assets/icons/marker-start.svg';
import markerEnd from '@/assets/icons/marker-end.svg';
// import markerMyPurple from '@/assets/icons/marker-purple.svg';

import { TMap, TMapLatLng } from '@/types';
import { reactElementToString } from '@/utils';

const { Tmapv3 } = window;

type MarkerProps = {
  mapContent: TMap;
  position: TMapLatLng;
  theme: 'green' | 'red' | 'start' | 'end';
  icon?: string;
  labelText?: string;
};

export function Marker({
  mapContent,
  position,
  theme,
  labelText,
}: MarkerProps) {
  const markerIcon =
    theme === 'green'
      ? markerMyBlue
      : theme === 'red'
        ? markerMyRed
        : theme === 'start'
          ? markerStart
          : markerEnd;
  return new Tmapv3.Marker({
    position,
    map: mapContent,
    icon: markerIcon,
    iconSize: new Tmapv3.Size(50, 50),
    label: labelText
      ? reactElementToString(
          <span className={`label-${theme}`}>{labelText}</span>
        )
      : '',
  });
}
