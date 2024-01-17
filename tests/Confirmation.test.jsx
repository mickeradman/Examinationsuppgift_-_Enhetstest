/**
@jest-environment jsdom
*/

import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import makeBooking from "./Utils";
import App from "../src/App";

describe("Confirmation page", () => {
  it("should display 'See you soon!' as a heading", async () => {
    makeBooking();

    await waitFor(() => {
      expect(
        screen.getByText("See you soon!", { selector: "h1" })
      ).toBeInTheDocument();
    });
  });

  it("should display a field with the label 'When' with data from booking page", async () => {
    render(<App />);

    await waitFor(() => {
      expect(
        screen.getByLabelText("When", {
          selector: "input",
        })
      ).toBeInTheDocument();
    });
  });

  it("should display a field with the label 'Who' with data from booking page", async () => {
    render(<App />);

    await waitFor(() => {
      expect(
        screen.getByLabelText("Who", {
          selector: "input",
        })
      ).toBeInTheDocument();
    });
  });

  it("should display a field with the label 'Lanes' with data from booking page", async () => {
    render(<App />);

    await waitFor(() => {
      expect(
        screen.getByLabelText("Lanes", {
          selector: "input",
        })
      ).toBeInTheDocument();
    });
  });

  it("should display a field with the label 'Bookig number' with data from booking page", async () => {
    render(<App />);

    await waitFor(() => {
      expect(
        screen.getByLabelText("Booking number", {
          selector: "input",
        })
      ).toBeInTheDocument();
    });
  });

  it("should display a field with the label 'Total' with data from booking page", async () => {
    render(<App />);

    await waitFor(() => {
      expect(screen.getByText("Total:")).toBeInTheDocument();
    });
  });

  it("should display a button with the text 'Sweet, let's go!'", async () => {
    render(<App />);

    await waitFor(() => {
      expect(
        screen.getByText("Sweet, let's go!", {
          selector: "button",
        })
      ).toBeInTheDocument();
    });
  });
});