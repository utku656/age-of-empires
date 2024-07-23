import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import MyDrawer from "./drawer";
import { navItems, drawerWidth } from "../../utils/constants";

jest.mock("../../utils/constants", () => ({
  drawerWidth: 240,
  navItems: [
    { name: "Home", link: "home" },
    { name: "Units", link: "units" },
  ],
}));

describe("MyDrawer component", () => {
  test("renders the drawer with the title and navigation links", () => {
    render(<MyDrawer mobileOpen={true} handleDrawerToggle={() => {}} />);

    expect(screen.getByText("Age of Empires")).toBeInTheDocument();

    navItems.forEach((item) => {
      expect(screen.getByText(item.name)).toBeInTheDocument();
    });
  });

  test("drawer calls handleDrawerToggle on close", () => {
    const handleDrawerToggle = jest.fn();
    render(
      <MyDrawer mobileOpen={true} handleDrawerToggle={handleDrawerToggle} />
    );

    fireEvent.click(screen.getByText("Age of Empires"));
    expect(handleDrawerToggle).toHaveBeenCalled();
  });
});
