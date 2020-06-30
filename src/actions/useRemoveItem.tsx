import { useStore } from "../store";

export const useRemoveItem = () => {
	// get state and setState from the central store
	// ! says this may return null but don't throw an error typescript
	var [state, setState] = useStore()!;

	// all I need is the ID for this.
	function removeItem(id: string) {
		var newState = state?.filter((item) => {
			return item.id !== id;
		});
		setState(newState!);
	}

	return removeItem;
};
