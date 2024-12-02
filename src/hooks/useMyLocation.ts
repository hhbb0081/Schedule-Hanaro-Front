type Geolocation = {
  coords: {
    latitude: number;
    longitude: number;
  };
};

type SetCoord = (latitude: number, longitude: number) => void;

export default function getMyLocation(setCoord: SetCoord) {
  const onSuccess = (position: Geolocation) => {
    const { latitude, longitude } = position.coords;
    setCoord(latitude, longitude);
  };
  navigator.geolocation.getCurrentPosition(onSuccess);
}
