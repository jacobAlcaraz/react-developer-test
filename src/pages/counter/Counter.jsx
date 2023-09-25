import React, { useState } from "react";
import Button from "../../components/Button";
import { useCounterStore } from "../../zustand/counterStore";
import { shallow } from "zustand/shallow";
import { VscDebugRestart, VscAdd, VscDash } from "react-icons/vsc";
const Counter = () => {
	//global state and global functions Task 7: Bonus (Optional)
	const { count, increaseCount, decreaseCount, resetCount } = useCounterStore();
	// (state) => state,
	// shallow

	// localState and functions  Task 2: State Management
	const [number, setNumber] = useState(0);

	const modifyNumber = (action) => {
		const isIncrement = Boolean(action === "Increment");
		const toBeAdd = isIncrement ? 1 : -1;
		setNumber((prev) => prev + toBeAdd);
	};

	const resetNumber = () => {
		setNumber((prev) => (prev = 0));
	};

	return (
		<div className="flex items-center flex-col justify-center py-4 ">
			<div className="flex flex-col gap-2 rounded-md border-black p-4 border">
				<div className="text-8xl text-center w-full" data-testid="counterValue">
					{
						// number //Task 2: State Management
						count //Task 7: Bonus (Optional)
					}
				</div>
				<div className="flex flex-row gap-2">
					<Button
						// onClick={resetNumber} //Task 2: State Management
						// onClick={() => modifyNumber("Decrement")} //
						onClick={resetCount} // Task 7: Bonus (Optional)
						className="font-medium text-xl w-10 btn btn-primary"
						id="resetButton"
					>
						<VscDebugRestart />
					</Button>
					<Button
						// onClick={() => modifyNumber("Decrement")} // Task 2: State Management
						onClick={decreaseCount} // Task 7: Bonus (Optional)
						className="font-medium text-xl w-10 btn btn-danger"
						id="decrementButton"
					>
						<VscDash />
					</Button>

					<Button
						// onClick={() => modifyNumber("Increment")} // Task 2: State Management
						onClick={increaseCount} //Task 7: Bonus (Optional)
						className="font-medium text-xl w-10 btn btn-secondary"
						id="incrementButton"
					>
						<VscAdd />
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Counter;
