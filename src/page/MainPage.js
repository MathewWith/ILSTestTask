import React from "react";
import { Map } from "../components/Map";
import { TransportationTable } from "../components/Table";

export const MainPage = () => {
  return (
    <main className="main_wrapper">
      <div className="main">
        <div className="table_wrapper">
          <h3>Заявки на перевозку</h3>
          <TransportationTable />
        </div>
        <div className="map_wrapper">
          <h3>Map</h3>
          <Map />
        </div>
      </div>
    </main>
  );
};
