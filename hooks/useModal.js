import { useState } from "react";

export const store = {
	state: { activeProject: null },
	setState(value) {
		this.state.activeProject = value;
	},
};

store.setState = store.setState.bind(store);

export function useModal() {
	const [state, set] = useState(store.state);

	return [state, store.setState];
}
