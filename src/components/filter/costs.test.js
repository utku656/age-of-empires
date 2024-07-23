import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import CostsFilter from "./costs.filter";

describe("CostsFilter component", () => {
  test("renders the component with checkbox", () => {
    render(
      <CostsFilter value={null} item="Gold" handleChangeRange={() => {}} />
    );

    expect(screen.getByLabelText("Gold")).toBeInTheDocument();
    expect(screen.getByRole("checkbox")).toBeInTheDocument();
  });

  test("calls handleChangeRange with correct value when checkbox is checked", () => {
    const handleChangeRange = jest.fn();
    render(
      <CostsFilter
        value={null}
        item="Gold"
        handleChangeRange={handleChangeRange}
      />
    );

    fireEvent.click(screen.getByRole("checkbox"));
    expect(handleChangeRange).toHaveBeenCalledWith([0, 10]);
  });

  test("calls handleChangeRange with null when checkbox is unchecked", () => {
    const handleChangeRange = jest.fn();
    render(
      <CostsFilter
        value={[0, 10]}
        item="Gold"
        handleChangeRange={handleChangeRange}
      />
    );

    fireEvent.click(screen.getByRole("checkbox"));
    expect(handleChangeRange).toHaveBeenCalledWith(null);
  });
});
