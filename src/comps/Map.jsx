import React, { useEffect, useRef } from "react";
import L from "leaflet"; // Import Leaflet
import "leaflet/dist/leaflet.css"; // Import Leaflet styles

const MapComponent = () => {
  const mapContainerRef = useRef(null); // Create a ref to store the map container

  useEffect(() => {
    if (mapContainerRef.current) {
      // Check if the map is already initialized
      const map = L.map(mapContainerRef.current, {
        center: [52.1124, -1.6878],
        zoom: 9,
        zoomControl: false,
        dragging: false, 
        scrollWheelZoom: false, 
        touchZoom: false, 
        doubleClickZoom: false, 
      });

      L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
      ).addTo(map);

      // Cleanup the map when the component is unmounted
      return () => {
        map.remove(); // Destroy the map instance
      };
    }
  }, []);

  return (
    <div
      ref={mapContainerRef}
      style={{width: "100%"}}
      className="map"
    />
  );
};

export default MapComponent;