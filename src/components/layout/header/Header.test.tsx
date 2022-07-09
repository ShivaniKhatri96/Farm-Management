import { render, screen } from "@testing-library/react";
import Header from "./Header";
import { renderWithProviders } from "../../../utils/test-utils";
import { BrowserRouter as Router } from "react-router-dom";
describe("Header", () => {
  test("Header renders correctly", async () => {
    renderWithProviders(
      <Router>
        <Header />
      </Router>
    );
    // this needs to be changed later
    expect(screen.getByText("Shivani")).toBeInTheDocument();
  });
});