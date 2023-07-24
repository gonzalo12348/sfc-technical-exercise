import React, { useState } from "react";
import DateRangePicker from "react-daterange-picker";
import "react-daterange-picker/dist/css/react-calendar.css";
import originalMoment from "moment";
import { extendMoment } from "moment-range";
import { FaCalendarAlt } from "react-icons/fa";
import styles from "./styles.module.css";

const moment = extendMoment(originalMoment);

const SingleDateRangePicker = () => {
  const today = moment();
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState(moment.range(today.clone().subtract(7, "days"), today.clone()));

  const onSelect = (selectedValue) => {
    setValue(selectedValue);
    setIsOpen(false);
  };

  const onToggle = () => {
    setIsOpen(!isOpen);
  };

  const renderSelectionValue = () => {
    return `${value.start.format("ddd, DD MMMM")} - ${value.end.format("ddd, DD MMMM")}`;
  };

  return (
    <div className={styles.datePickerContainer}>
      <div
        onClick={onToggle}
        className={styles.datePickerInputContainer}
      >
        <FaCalendarAlt className={styles.datePickerIcon} />
        <input
          type="text"
          value={renderSelectionValue()}
          readOnly
          className={styles.datePickerInput}
          role="button"
        />
      </div>

      {isOpen && (
        <div className={styles.datePickerDropdown}>
          <DateRangePicker value={value} onSelect={onSelect} onClose={onToggle} />
        </div>
      )}
    </div>
  );
};

export default SingleDateRangePicker;