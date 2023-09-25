import { createWithEqualityFn } from "zustand/traditional";

const state = {
	count: 0,
};

export const useCounterStore = createWithEqualityFn((set) => ({
	...state,
	increaseCount: () => set((state) => ({ count: state.count + 1 })),
	decreaseCount: () => set((state) => ({ count: state.count - 1 })),
	resetCount: () => set({ count: 0 }),
}));
