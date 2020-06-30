import React, { useState } from "react";

import { useStore } from "./store";
import { useAddItem } from "./actions/useAddItem";

const ListItems = () => {
	var [state] = useStore();
	var addItem = useAddItem();

	var [item, setItem] = useState({
		title: null,
		description: null,
		duration: null,
	});
	return (
		<div style={{ margin: "auto", width: "500px" }}>
			<h1>Add an item!</h1>
			{state.map((item, i) => {
				return (
					<ul key={i}>
						<li>{item.title}</li>
						<li>{item.description}</li>
						<li>{item.duration}</li>
					</ul>
				);
			})}
			<form style={{ marginBottom: "30px" }}>
				<label htmlFor="itemTitle">Title</label>
				<input
					id="itemTitle"
					placeholder="Your Item Title"
					onChange={(e) =>
						setItem({ ...item, title: e.target.value })
					}
				/>
				<button
					onClick={(e) => {
						e.preventDefault();
						addItem(item.title, item.description, item.duration);
					}}
					// onClick={(e) => {
					// 	e.preventDefault();
					// 	addItem({
					// 		title: item.title,
					// 		description: item.description,
					// 		duration: item.duration,
					// 	});
					// }}
				>
					add an item
				</button>
			</form>
		</div>
	);
};

export default ListItems;
