import React from "react";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useSelector } from "react-redux";
import { SANKT_PETERSBURG_CENTER, PATH_POLYLINE } from "./constants";
import { Routing } from "./Routing";

L.Icon.Default.imagePath = "https://unpkg.com/leaflet@1.5.0/dist/images/";

export const Map = () => {
  const selected = useSelector((state) => state.select.selected);

  const pickUpPoint = selected?.loadingPointbound;
  const dropPoint = selected?.dropPointbound;

  return (
    <MapContainer center={SANKT_PETERSBURG_CENTER} zoom={10} zoomControl={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {selected && (
        <>
          <Marker position={pickUpPoint}>
            <Popup>{"Адрес зоны погрузки"}</Popup>
          </Marker>
          <Routing
            start={pickUpPoint}
            stop={dropPoint}
            polyline={PATH_POLYLINE}
          />
          <Marker position={dropPoint}>
            <Popup>{"Адрес зоны разгрузки"}</Popup>
          </Marker>
        </>
      )}
    </MapContainer>
  );
};
