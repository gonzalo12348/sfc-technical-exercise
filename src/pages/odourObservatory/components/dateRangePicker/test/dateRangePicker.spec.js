// /* eslint-disable testing-library/prefer-screen-queries */
// import React from "react";
// import { render, fireEvent } from "@testing-library/react";
// import DateRangePicker from "../dateRangePicker.js";

// test("renders component and opens the date picker", () => {
//   // Renderizar el componente
//   const { getByText, queryByText, getByPlaceholderText, getAllByRole } = render(<DateRangePicker />);

//   // Comprobar que el componente se ha renderizado correctamente
//   const inputElement = getByText("Mon, 17 July - Mon, 24 July");
//   expect(inputElement).toBeInTheDocument();

//   // Comprobar que el date picker no está visible inicialmente
//   const datePickerDropdown = queryByText("Sun, 05 December - Sat, 11 December");
//   expect(datePickerDropdown).toBeNull();

//   // Abrir el date picker haciendo clic en el input
//   fireEvent.click(inputElement);

//   // Comprobar que el date picker está visible después de hacer clic en el input
//   const datePickerDropdownVisible = queryByText("Sun, 05 December - Sat, 11 December");
//   expect(datePickerDropdownVisible).toBeInTheDocument();
// });
