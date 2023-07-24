import React, { useState } from "react";
import styles from "./styles.module.css";
import Slider from "@mui/material/Slider";

/**
 * InputSlider component to render a slider with customizable options.
 *
 * @param {Object} props - Object with all props
 * @param {String} props.title - The title of the slider
 * @param {Array} props.marks - The options for the slider as an array of objects with value and label properties
 * @returns {React.ReactElement} InputSlider component.
 */
const InputSlider = ({ title, marks }) => {
  const [value, setValue] = useState(3);
  const [label, setLabel] = useState("Normal");

  /**
   * Function to handle the slider value change.
   *
   * @param {Object} event - The event object from the slider
   * @param {Number} newValue - The new value of the slider
   */
  const handleChange = (event, newValue) => {
    setValue(newValue);
    const selectedLabel = marks.find((mark) => mark.value === newValue)?.label;
    setLabel(selectedLabel || "Normal");
  };

  const sx = {
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
  };

  return (
    <div className={styles.inputSliderContainer}>
      <div className={styles.inputSilderTitlesContainer}>
        <h4>{title}</h4>
      </div>
      <div className={styles.inputSlider}>
        {/* Slider component */}
        <Slider
          aria-label={title}
          value={value}
          valueLabelDisplay="off"
          step={1}
          marks
          min={1}
          max={marks.length}
          sx={sx}
          onChange={handleChange}
        />
      </div>
      <div className={styles.labelContainer}>
        <p>{label}</p>
      </div>
    </div>
  );
};

export default InputSlider;
