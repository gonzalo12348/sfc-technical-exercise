import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import InputSlider from "../inputSlider";

describe("InputSlider", () => {
  test("should render correctly with the default label", () => {
    render(<InputSlider title="Intensidad" marks={[]} />);
    const sliderTitle = screen.getByText("Intensidad");
    const defaultLabel = screen.getByText("Normal");

    expect(sliderTitle).toBeInTheDocument();
    expect(defaultLabel).toBeInTheDocument();
  });

  test("should display the selected label when the slider value changes", () => {
    const marks = [
      { value: 1, label: "Muy Débil" },
      { value: 2, label: "Débil" },
      { value: 3, label: "Normal" },
      { value: 4, label: "Fuerte" },
      { value: 5, label: "Muy Fuerte" },
    ];

    render(<InputSlider title="Intensidad" marks={marks} />);
    const slider = screen.getByRole("slider");
    const labelElement = screen.getByText("Normal");

    // Initially, the label should be "Normal"
    expect(labelElement).toBeInTheDocument();

    // Change the slider value to select "Fuerte"
    fireEvent.change(slider, { target: { value: 4 } });
    const selectedLabel = screen.getByText("Fuerte");

    // The label should now display "Fuerte"
    expect(selectedLabel).toBeInTheDocument();
  });
});
