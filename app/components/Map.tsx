'use client';

import L from 'leaflet';
import { MapContainer,Marker,TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css'
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png'


delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
  iconUrl:markerIcon.src,
  iconRetinaUrl : markerIcon2x.src,
  shadowUrl:markerShadow.src
})

// Fix for default marker icon
const customIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});


interface MapProps{
  center?: number[]
}

const Map: React.FC<MapProps> = ({
  center
}) => {
  return (
    <MapContainer
      center={center as L.LatLngExpression || [51, -0.78] }
      zoom={center ? 4:2}
      scrollWheelZoom={false}
      className=" h-[35vh] rounded-lg"
    >
      <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
      {center && (
        <Marker
        position={center as L.LatLngExpression}
        icon={customIcon}
        />
      )}
    </MapContainer>
  )
}
export default Map