import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "./header";
import { navItems } from "../../utils/constants";

jest.mock("../../utils/constants", () => ({
  navItems: [
    { name: "Home", link: "home" },
    { name: "Units", link: "units" },
  ],
}));

jest.mock("../drawer/drawer", () => (props) => (
  <div data-testid="drawer">
    {props.mobileOpen ? "Drawer Open" : "Drawer Closed"}
  </div>
));

describe("Header component", () => {
  test("renders the header with the title", () => {
    render(<Header />);
    expect(screen.getByText("Age of Empires")).toBeInTheDocument();
  });

  test("renders the navigation links", () => {
    render(<Header />);
    navItems.forEach((item) => {
      expect(screen.getByText(item.name)).toBeInTheDocument();
    });
  });

  test("drawer toggle works", () => {
    render(<Header />);
    const menuButton = screen.getByLabelText("open drawer");
    fireEvent.click(menuButton);
    expect(screen.getByTestId("drawer")).toHaveTextContent("Drawer Open");
    fireEvent.click(menuButton);
    expect(screen.getByTestId("drawer")).toHaveTextContent("Drawer Closed");
  });
});
