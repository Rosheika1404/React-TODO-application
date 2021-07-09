import React, { useState } from "react";

//create your first component
export function Home() {
	const [list, setList] = useState([]);
	const [todo, setTodo] = useState("");

	return (
		<div className="text-center mt-5 notepad">
			<div className="list">
				<h1>To-Do List</h1>
				<input
					className="input"
					value={todo}
					placeholder="What do you need to do?"
					onChange={e => setTodo(e.target.value)}
				/>

				<button
					onClick={() => {
						setList([...list, todo]);
						setTodo("");
					}}
					className="btn btn-success m-2">
					Add
				</button>
				{list.map((element, index) => (
					<div key={index}>
						{element}
						<button
							onClick={() =>
								setList(
									list.filter(remove => remove !== element)
								)
							}
							className="btn btn-warning"></button>
					</div>
				))}
			</div>
		</div>
	);
}
