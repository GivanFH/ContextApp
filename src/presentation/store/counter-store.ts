import { create } from "zustand";

export interface CounterState {
    count: number

    incrementBy: (value : number) => void;
    setZero: ( ) => void;
}

export const useCounterStore = create<CounterState>()((set, get) => ({
    count: 1,

    incrementBy: ( value ) => {
        set({ count : get().count + value });
    },

    setZero: () => {
        set({ count : 0});
    },
}));

