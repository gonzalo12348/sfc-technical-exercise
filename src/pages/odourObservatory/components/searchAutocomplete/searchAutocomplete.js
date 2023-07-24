import React from "react";
import { LoadScript } from "@react-google-maps/api";
import PlacesAutocomplete from "react-places-autocomplete";
import styles from "./styles.module.css"; // Reemplaza "styles.module.css" con la ruta a tu archivo CSS

const SearchAutocomplete = ({ address, setAddress, handleAddressSelect }) => {
//   const [address, setAddress] = React.useState("");

//   const handleSelect = (address) => {
//     setAddress(address);
//   };

  return (
    <div className={styles.searchAutocompleteContainer}>
      <LoadScript googleMapsApiKey="AIzaSyDzl_gZH-qfJpFF56SkeICqceJxLIY1ziQ" libraries={['places']}>
        <PlacesAutocomplete value={address} onChange={setAddress} onSelect={handleAddressSelect}>
          {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
            <div className={styles.autocompleteContainer}>
              <input className={styles.inputAutocomplete} {...getInputProps({ placeholder: 'Ubicación' })} />
              <div className={styles.suggestionsContainer}>
                {loading ? <div>Loading...</div> : null}
                {suggestions.map((suggestion) => {
                  const style = {
                    backgroundColor: suggestion.active ? '#41b6e6' : '#fff',
                  };
                  return (
                    <div className={styles.suggestionItemContainer} key={suggestion.placeId} {...getSuggestionItemProps(suggestion, { style })}>
                      {suggestion.description}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>
      </LoadScript>
    </div>
  );
};

export default SearchAutocomplete;
