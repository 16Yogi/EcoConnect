import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MyMapComponent = ({ eventLocation }) => {
  return (
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
      <GoogleMap
        mapContainerStyle={{ width: '100%', height: '400px' }}
        center={eventLocation}
        zoom={10}
      >
        <Marker position={eventLocation} />
      </GoogleMap>
    </LoadScript>
  );
};
