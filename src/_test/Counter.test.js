import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Counter from "../pages/counter/Counter";

test("incrementByClickingIncrement", () => {
	render(<Counter />);

	const incrementButton = document.getElementById("incrementButton");

	const counterValue = screen.getByTestId("counterValue");
	expect(counterValue).toHaveTextContent("0");

	// Click the increment button
	fireEvent.click(incrementButton);
	expect(counterValue.textContent).toEqual("1");
});
test("decrementByClickingDecrement", () => {
	render(<Counter />);
	const decrementButton = document.getElementById("decrementButton");

	const counterValue = screen.getByTestId("counterValue");

	// Click the decrement button
	fireEvent.click(decrementButton);
	expect(counterValue.textContent).toEqual("0");
});

test("resetByClickingReset", () => {
	render(<Counter />);

	const resetButton = document.getElementById("resetButton");
	const counterValue = screen.getByTestId("counterValue");

	// Click the reset button
	fireEvent.click(resetButton);
	expect(counterValue.textContent).toEqual("0");
});
