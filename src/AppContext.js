import create from "zustand";

import produce from "immer";

const defaultFields = {
  "1-squareSideSize": 9.89,
  "1-innerCircleRadius": 1,
  "1-outterCircleRadius": 2,
  "1-cornerCircleRadius": 1,
  "1-diagonalCircleRadius": 1.2,
  "2-scale": 1,
  "2-optional-group": false,
  "2-x-position": 0,
  "2-y-position": 0,
  "2-z-position": 0,
  "2-x-rotation": 0,
  "2-y-rotation": 0,
  "2-z-rotation": 0,
  "2-rotation-point-x": -8,
  "2-rotation-point-y": 8,
  "2-rotation-point-z": 0,
  "2-rotate-action-value": 0,
};

export const useStore = create((set) => ({
  fields: defaultFields,
  set: (fn) => set(produce(fn)),
}));
