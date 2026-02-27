import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// 1. THIS IS THE KEY COMPONENT
function RecenterMap({ position }: { position: [number, number] }) {
  const map = useMap();
  useEffect(() => {
    // .flyTo makes it move smoothly, .setView makes it jump instantly
    map.flyTo(position, 13, {
      duration: 1.5 // seconds
    });
  }, [position, map]); 
  return null;
}

function ChangeView({ center }: { center: [number, number] }) {
  const map = useMap();
  useEffect(() => {
    map.flyTo(center, 13, { duration: 1.5 }); // This adds a smooth "flying" animation
  }, [center, map]);
  return null;
}

const STAGE_COORDINATES: Record<string, [number, number]> = {
  inspecting: [43.6532, -79.3832], // Toronto
  pickup: [43.6426, -79.3871],     // Near CN Tower
  transit: [43.6777, -79.6248],    // Near Airport
};

const InspectorLiveMap = ({ stage }: { stage: string }) => {
  const position = STAGE_COORDINATES[stage] || STAGE_COORDINATES.inspecting;

  const carIcon = L.divIcon({
  html: `<div style="font-size: 24px;">🚗</div>`,
  className: 'custom-div-icon',
  iconSize: [30, 30],
  iconAnchor: [15, 15],
});

  return (
    <div className="relative z-0 h-[400px] w-full rounded-lg border border-gray-200 shadow-sm dark:border-gray-700">
      <MapContainer 
  {...({
    center: position,
    zoom: 13,
    style: { height: '100%', width: '100%' }
  } as any)}
>
        <TileLayer
  {...({
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  } as any)}
/>
        
        {/* 2. ADD THIS LINE INSIDE THE MAP CONTAINER */}
        <RecenterMap position={position} />

        <Marker position={position} icon={carIcon} />
      </MapContainer>
    </div>
  );
};

export default InspectorLiveMap;