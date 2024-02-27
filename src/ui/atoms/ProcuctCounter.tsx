import { useState } from "react";

export const ProductCounter = () => {
	const [counter, setCounter] = useState(0);
	return (
		<div>
			<button onClick={() => setCounter((counter) => counter - 1)}> - </button>
			<input readOnly value={counter} />
			<button onClick={() => setCounter((counter) => counter + 1)}> + </button>
		</div>
	);
};
