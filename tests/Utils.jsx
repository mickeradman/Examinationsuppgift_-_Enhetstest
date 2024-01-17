import { fireEvent, render, screen } from "@testing-library/react";
import App from "../src/App";

export default function makeBooking() {
  render(<App />);

  fireEvent.change(
    screen.getByLabelText("Date", {
      selector: "input",
    }),
    { target: { value: "2024-01-15" } }
  );

  fireEvent.change(
    screen.getByLabelText("Time", {
      selector: "input",
    }),
    { target: { value: "14:00" } }
  );

  fireEvent.change(
    screen.getByLabelText("Number of awesome bowlers", {
      selector: "input",
    }),
    { target: { value: "2" } }
  );

  fireEvent.change(
    screen.getByLabelText("Number of lanes", {
      selector: "input",
    }),
    { target: { value: "1" } }
  );

  const addShoeButton = screen.getByText("+", { selector: "button" });
  fireEvent.click(addShoeButton);

  fireEvent.change(
    screen.getByLabelText("Shoe size / person 1", {
      selector: "input",
    }),
    { target: { value: "42" } }
  );

  fireEvent.click(addShoeButton);

  fireEvent.change(
    screen.getByLabelText("Shoe size / person 2", {
      selector: "input",
    }),
    { target: { value: "40" } }
  );

  fireEvent.click(screen.getByText("strIIIIIike!", { selector: "button" }));
}
