import React from "react";
import { MapContainer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./MyMap.css";
import mapData from "../data/countries.json";

export default function MyMap() {
  return (
    <div>
      <h1 className="title">My map</h1>
      <MapContainer className="map" zoom={2} center={[20, 100]}>
        <GeoJSON data={mapData.features} />
      </MapContainer>
    </div>
  );
}
