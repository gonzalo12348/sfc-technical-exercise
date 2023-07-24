import React from "react";
import styles from "./styles.module.css";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { googleMapsApiKey } from "../../../../constants/const";

const Map = ({ selectedLocation }) => {
  return (
    <LoadScript
      googleMapsApiKey={googleMapsApiKey}
      libraries={["places"]}
      className={styles.loadScriptContainer}
    >
      <GoogleMap
        mapContainerStyle={{
            width: '100%',
            height: '400px',
        }}
        center={selectedLocation}
        zoom={13}
        mapContainerClassName={styles.map}
      >
        <Marker position={selectedLocation} draggable={true} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
