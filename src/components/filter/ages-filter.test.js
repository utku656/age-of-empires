import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import AgesFilter from "./ages-filter";
import { AGES_FILTER_CHOICES } from "../../utils/constants";

jest.mock("../../utils/constants", () => ({
  AGES_FILTER_CHOICES: ["All", "Dark", "Feudal", "Castle", "Imperial"],
}));

describe("AgesFilter component", () => {
  test("renders the toggle buttons with the correct labels", () => {
    render(<AgesFilter agesFilter="Dark" handlechangeAges={() => {}} />);

    AGES_FILTER_CHOICES.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });

  test("calls handlechangeAges with the correct value when a button is clicked", () => {
    const handlechangeAges = jest.fn();
    render(
      <AgesFilter agesFilter="Dark" handlechangeAges={handlechangeAges} />
    );

    fireEvent.click(screen.getByText("Feudal"));
    expect(handlechangeAges).toHaveBeenCalledWith("Feudal");
  });

  test("renders the selected button as active", () => {
    render(<AgesFilter agesFilter="Castle" handlechangeAges={() => {}} />);

    expect(screen.getByText("Castle")).toHaveClass("Mui-selected");
  });
});
