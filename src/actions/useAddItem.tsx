import * as React from "react";
import { uuid } from "uuidv4";

import { useStore } from "../store";

type Props = {
	title: string;
	description: string;
	duration: string;
};

// you want to return a function for this hook with props defined in the function, so React rerenders when it is called.
export var useAddItem = () => {
	// the bang! tells typescript that this value may be null and not to complain about it.
	var [state, setState] = useStore()!;
	// I could use an object called props: Props; but I don't get automatic type suggestions in other files
	// by extracting individual properties out, I get type suggestions in other files.
	// function addItem(title: string, description: string, duration: string) {
	// 	console.log("adding your item!", title);
	// 	setState([...state!, { title, description, duration, id: uuid() }]);
	// 	console.log("adding your item!", ...state!);
	// }
	function addItem(props: Props) {
		setState([...state!, { ...props, id: uuid() }]);
	}
	return addItem;
};
