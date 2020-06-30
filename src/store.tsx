import React, { useState, createContext, useContext } from "react";
import { uuid } from "uuidv4";

var initialState = [
	{
		id: uuid(),
		title: "Intro to HTML",
		description: "Learn everything you need to know about html!",
		duration: "1hr 5min",
	},
	{
		id: uuid(),
		title: "Python Basics",
		description: "Finally obtain a foundation in Python Programming",
		duration: "2hr 10min",
	},
	{
		id: uuid(),
		title: "Javascript and Beyond",
		description: "Conquer vanilla JS and ES6 basics",
		duration: "2hr 10min",
	},
];

// the children should be of type ReactNode, which gives access many properties like defaultProps
type Props = {
	children: React.ReactNode;
};

// define the type for the useState && Context input
// where represent "initial" and should be the initial state type
type IState = {
	id: string;
	title: string;
	description: string;
	duration: string;
}[];

// define the type for the context provider input where the first value represents the state and second one represents setState
type ContextShape = [IState | null, (props: IState) => void | IState];

// use ContextShape and undefined
// <> represent a generic and tell React what type the passed in value should be for this context
var Store = createContext<ContextShape | undefined>(undefined);

// Tell Store Provider that it should be of type React.FC ( functional component )
// This type has defaultProps
// can also use: React.FC<React.ReactNode> after component name, which is for children
export const StoreProvider = ({ children }: Props) => {
	// useState expects a type of props or null
	var [state, setState] = useState<IState | null>(initialState);
	return (
		<Store.Provider value={[state, setState]}>{children}</Store.Provider>
	);
};

export const useStore = () => useContext(Store);
