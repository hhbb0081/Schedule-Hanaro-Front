type Geolocation = {
  coords: {
    latitude: number;
    longitude: number;
  };
};

type SetCoord = (currCoord: { latitude: number; longitude: number }) => void;

export const setMyLocation = (setCoord: SetCoord) => {
  const onSuccess = (position: Geolocation) => {
    const { latitude, longitude } = position.coords;
    // 현위치 설정
    setCoord({ latitude, longitude });
  };
  // makeMarker : 함수
  navigator.geolocation.getCurrentPosition(onSuccess);
};
