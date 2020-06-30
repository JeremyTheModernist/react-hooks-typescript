import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { StoreProvider } from "./store";
import ListItems from "./list-items";

const App: React.FC = () => {
	return (
		<StoreProvider>
			<main>
				<ListItems />
			</main>
		</StoreProvider>
	);
};

export default App;
