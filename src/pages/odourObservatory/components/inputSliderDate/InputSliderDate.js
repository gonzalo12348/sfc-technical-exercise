import React, { useState } from "react";
import styles from "./styles.module.css";
import Slider from "@mui/material/Slider";
import { formatTime } from "../../../../utils/format";

const InputSliderDate = () => {
  const [horario, setHorario] = useState([0, 1439]);

  const handleHorarioChange = (event, newValue) => {
    setHorario(newValue);
  };

  return (
    <div className={styles.inputSliderContainer}>
      <div className={styles.inputSilderTitlesContainer}>
        <h4>Desde</h4>
        <h4>Hasta</h4>
      </div>
      <div className={styles.inputSlider}>
        <Slider
          value={horario}
          size="medium"
          min={0}
          max={1439}
          step={1}
          valueLabelDisplay="off"
          onChange={handleHorarioChange}
          valueLabelFormat={(value) => formatTime(value)}
          // marks={[
          //   { value: 0, label: '12:00 AM' },
          //   { value: 719, label: '11:59 AM' },
          //   { value: 720, label: '12:00 PM' },
          //   { value: 1439, label: '11:59 PM' },
          // ]}
          // sx={{
          //   color: "#EE82EE",
          //   height: 5,
          //   "& .MuiSlider-thumb": {
          //     height: 20,
          //     width: 20,
          //     border: "2px solid #fff",
          //     "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
          //       boxShadow: "gray",
          //     },
          //   },
          //   '& .MuiSlider-rail': {
          //     opacity: 0.5,
          //     backgroundColor: '#bfbfbf',
          //   },
          //   '& .MuiSlider-mark': {
          //     backgroundColor: '#bfbfbf',
          //     height: 8,
          //     width: 1,
          //     '&.MuiSlider-markActive': {
          //       opacity: 1,
          //       backgroundColor: 'currentColor',
          //     },
          //   },
          // }}
          sx ={{
            color: "#EE82EE",
            height: 5,
            "& .MuiSlider-thumb": {
              height: 20,
              width: 20,
              border: "2px solid #fff",
              "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
                boxShadow: "inherit",
              },
            },
              '& .MuiSlider-rail': {
              opacity: 0.5,
              backgroundColor: '#bfbfbf',
            },
          }}
        />
      </div>
      <div className={styles.labelContainer}>
        <p>
          {formatTime(horario[0])} - {formatTime(horario[1])}
        </p>
      </div>
    </div>
  );
};

export default InputSliderDate;
