import { createWithEqualityFn } from "zustand/traditional";

const state = {
	jsonPlaceHolderUserList: [],
};

export const useJsonPlaceHolderUserListStore = createWithEqualityFn((set) => ({
	...state,
	setjsonPlaceHolderUserList: (data) => {
		return set({ jsonPlaceHolderUserList: data });
	},
}));
