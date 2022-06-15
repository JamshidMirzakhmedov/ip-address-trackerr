import React from "react";
import { MapContainer, TileLayer, Popup, CircleMarker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
function Map({ latitude, longitude }) {
  const pos = [latitude, longitude];

  if (latitude === undefined || longitude === undefined) {
    return (
      <MapContainer
        className="d-inline-block"
        center={[41.267838230094824, 69.26542715435775]}
        zoom={1}
        style={{
          width: "100%",
          height: "100%",
          top: "-100px",
        }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    );
  } else if (latitude === null || longitude === null) {
    return (
      <div className="text-danger text-center border  border-danger">
        <h3>Latitude and Longitude are unavailable</h3>
      </div>
    );
  }
  console.log(latitude, longitude);

  return (
    <>
      <MapContainer
        className="d-inline-block"
        center={pos}
        zoom={1}
        style={{
          width: "100%",
          height: "100%",
          top: "-100px",
        }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <CircleMarker center={pos}>
          <Popup>This IP user is here</Popup>
        </CircleMarker>
      </MapContainer>
    </>
  );
}

export default Map;
