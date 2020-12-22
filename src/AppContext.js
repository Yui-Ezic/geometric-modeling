import create from "zustand";

import produce from "immer";

const defaultFields = {
  "1-squareSideSize": 9.89,
  "1-innerCircleRadius": 2,
  "1-outterCircleRadius": 1.5,
  "1-cornerCircleRadius": 1,
  "1-diagonalCircleRadius": 1.2,
};

export const useStore = create((set) => ({
  fields: defaultFields,
  set: (fn) => set(produce(fn)),
}));
