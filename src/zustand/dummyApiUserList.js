import { createWithEqualityFn } from "zustand/traditional";

const state = {
	dummyApiUserList: [],
};

export const useDummyApiUserListStore = createWithEqualityFn((set) => ({
	...state,
	setDummyApiUserStore: (data) => {
		return set({ dummyApiUserList: data });
	},
}));
