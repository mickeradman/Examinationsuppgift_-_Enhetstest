/**
@jest-environment jsdom
*/

import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect } from "vitest";
// import Navigation from "../src/components/Navigation/Navigation";
import App from "../src/App";

describe("Navigation in hamburger menu", () => {
  it("should display 'Booking' as a navigation link", async () => {
    render(<App />);

    // fireEvent.click(screen.getByAltText("Navigation icon"));

    await waitFor(() => {
      expect(
        screen.getByText("Booking", { selector: "a" })
      ).toBeInTheDocument();
    });
  });

  it("should display 'Confirmation' as a navigation link", async () => {
    render(<App />);

    await waitFor(() => {
      expect(
        screen.getByText("Confirmation", { selector: "a" })
      ).toBeInTheDocument();
    });
  });
});
