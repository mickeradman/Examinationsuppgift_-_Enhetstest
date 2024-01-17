/**
@jest-environment jsdom
*/

import { BrowserRouter } from "react-router-dom";

import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Booking from "../src/views/Booking";

describe("Booking page", () => {
  describe("Input fields", () => {
    it("should display four input fields", async () => {
      render(
        <BrowserRouter>
          <Booking />
        </BrowserRouter>
      );

      await waitFor(() => {
        expect(
          screen.getByLabelText("Date", {
            selector: "input",
          })
        ).toBeInTheDocument();

        expect(
          screen.getByLabelText("Time", { selector: "input" })
        ).toBeInTheDocument();

        expect(
          screen.getByLabelText("Number of awesome bowlers", {
            selector: "input",
          })
        ).toBeInTheDocument();

        expect(
          screen.getByLabelText("Number of lanes", { selector: "input" })
        ).toBeInTheDocument();
      });
    });
  });

  describe("Shoe related", () => {
    it("should show a button for adding shoes", async () => {
      render(
        <BrowserRouter>
          <Booking />
        </BrowserRouter>
      );

      await waitFor(() => {
        expect(
          screen.getByText("+", { selector: "button" })
        ).toBeInTheDocument();
      });
    });

    it("should show a button for removing shoes if there are shoes", async () => {
      render(
        <BrowserRouter>
          <Booking />
        </BrowserRouter>
      );

      // Gör ett klick på plussknappen
      fireEvent.click(screen.getByText("+", { selector: "button" }));

      await waitFor(() => {
        expect(
          screen.getByText("-", { selector: "button" })
        ).toBeInTheDocument();
      });
    });

    it("should count players and shoes correctly", async () => {
      render(
        <BrowserRouter>
          <Booking />
        </BrowserRouter>
      );

      // Sätter värdet på inputfältet till 3.
      fireEvent.change(
        screen.getByLabelText("Number of awesome bowlers", {
          selector: "input",
        }),
        { target: { value: "3" } }
      );

      const button = screen.getByText("+", { selector: "button" });

      // Gör tre klick på plusknappen - klickar ut tre skofält
      fireEvent.click(button);
      fireEvent.click(button);
      fireEvent.click(button);

      await waitFor(() => {
        // Kollar så inputfältet för spelare har värdet 3.
        expect(
          screen.getByLabelText("Number of awesome bowlers", {
            selector: "input",
          })
        ).toHaveValue(3);

        // Kollar så "Shoe size / person 3" visas på skärmen, vilket det ska göra om plusknappen klickats på tre gånger.
        expect(screen.getByText("Shoe size / person 3")).toBeInTheDocument();
      });
    });
  });
  describe("Confirm booking button", () => {
    it("should display a confirm booking button", async () => {
      render(
        <BrowserRouter>
          <Booking />
        </BrowserRouter>
      );

      await waitFor(() => {
        expect(
          screen.getByText("strIIIIIike!", { selector: "button" })
        ).toBeInTheDocument();
      });
    });
  });
});
