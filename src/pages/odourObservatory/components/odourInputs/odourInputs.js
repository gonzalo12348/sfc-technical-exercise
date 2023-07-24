import React from "react";
import { agradabilidadMarks, intensidadMarks } from "../../../../constants/const-slider-options";
import DateRangePicker from "../dateRangePicker";
import InputSlider from "../inputSlider";
import InputSliderDate from "../inputSliderDate";
import SearchAutocomplete from "../searchAutocomplete";
import styles from './styles.module.css';


const OdourInputs = ({ address, setAddress, handleAddressSelect }) => {
    return (
        <div className={styles.inputsContainer}>
          <div className={styles.inputContainer}>
            <div className={styles.searchInputsContainer}>
              <SearchAutocomplete address={address} setAddress={setAddress} handleAddressSelect={handleAddressSelect} />
              <DateRangePicker />
            </div>
            <div className={styles.odourFiltersContainer}>
              <div className={styles.odourFilterTitleContainer}>
                <h4>Tipo de olor</h4>
              </div>
              <div className={styles.odourFilterItemsContainer}>
                <button className={styles.filterButton}>Industrial</button>
                <button className={styles.filterButton}>Urbano</button>
                <button className={styles.filterButton}>Residuos y aguas industriales</button>
                <button className={styles.filterButton}>Campo y naturaleza</button>
                <button className={styles.filterButton}>Comida</button>
              </div>
            </div>
          </div>

          <div className={styles.inputSlidersContainer}>
            <InputSliderDate />
            <InputSlider title="Intensidad" marks={intensidadMarks} />
            <InputSlider title="Agradabilidad" marks={agradabilidadMarks} />
          </div>
        </div>
    )
}

export default OdourInputs;