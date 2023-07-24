import React, { useState } from 'react';
import styles from './stylesResponsive.module.css';
import OdourCollectLogo from '../../assets/OdourCollectLogo.svg';
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import OdourInputs from './components/odourInputs/odourInputs';
import Map from './components/map';

const center = {
  lat: 40.416775, // Latitude of Madrid, Spain
  lng: -3.70379, // Longitude of Madrid, Spain
};

const OdourObservatory = () => {
  const [address, setAddress] = useState('');
  const [selectedLocation, setSelectedLocation] = useState(center);

  const handleAddressSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setAddress(value);
    setSelectedLocation(latLng);
  };
  
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img src={OdourCollectLogo} alt="logo" width="130" height="80" />
      </header>
      <main className={styles.main}>
        <OdourInputs address={address} setAddress={setAddress} handleAddressSelect={handleAddressSelect} />
        <div className={styles.mapContainer}>
          <Map selectedLocation={selectedLocation}/>
        </div>
      </main>
    </div>
  );
};

export default OdourObservatory;
