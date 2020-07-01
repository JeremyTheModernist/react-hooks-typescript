import React, { useState } from "react";

import { useStore } from "./store";
import { useAddItem } from "./actions/useAddItem";
import { useRemoveItem } from "./actions/useRemoveItem";

var inputStyle,
	buttonStyle = {
		marginTop: "15px",
	};

const ListItems = () => {
	var { state } = useStore();
	var addItem = useAddItem();
	var removeItem = useRemoveItem();
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
						<li>
							<button
								onClick={() => removeItem(item.id)}
								style={buttonStyle}
							>
								Remove Item
							</button>
						</li>
					</ul>
				);
			})}
			<form style={{ marginBottom: "30px" }}>
				<div style={{ marginBottom: "30px" }}>
					<label htmlFor="itemTitle">Title</label>
					<br />
					<input
						id="itemTitle"
						placeholder="Your Item Title"
						style={inputStyle}
						onChange={(e) =>
							setItem({ ...item, title: e.target.value })
						}
					/>
				</div>
				<div style={{ marginBottom: "30px" }}>
					<label htmlFor="itemDescription">Description</label>
					<br />
					<input
						id="itemDescription"
						placeholder="Your Item Description"
						style={inputStyle}
						onChange={(e) =>
							setItem({ ...item, description: e.target.value })
						}
					/>
				</div>
				<div style={{ marginBottom: "30px" }}>
					<label htmlFor="itemDuration">Duration</label>
					<br />
					<input
						id="itemDuration"
						style={inputStyle}
						placeholder="Your Item Duration"
						onChange={(e) =>
							setItem({ ...item, duration: e.target.value })
						}
					/>
				</div>

				<br />
				<button
					// onClick={(e) => {
					// 	e.preventDefault();
					// 	addItem(item.title, item.description, item.duration);
					// }}
					onClick={(e) => {
						e.preventDefault();
						addItem({
							title: item.title,
							description: item.description,
							duration: item.duration,
						});
					}}
				>
					add an item
				</button>
			</form>
		</div>
	);
};

export default ListItems;
