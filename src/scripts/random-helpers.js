import * as THREE from "three";

export const random = (a = 1, b = 0) => {
  const lower = Math.min(a, b);
  const upper = Math.max(a, b);
  return lower + Math.random() * (upper - lower);
};

export const randomInt = (a = 1, b = 0) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

export const getPositionBetween = (min, max, variance) =>
  random(min - variance, max + variance);

const defaultHueVariance = 40;

export const getRandomColor = (baseHue, hueVariance = defaultHueVariance) => {
  const hue = randomInt(baseHue - hueVariance, baseHue + hueVariance);
  const saturation = randomInt(4, 55);

  return `hsla(${hue}, ${saturation}%, ${randomInt(30, 80)}%, ${random(0.2, 0.6)})`;
};

export const round = (num, precision = 100) =>
  Math.round((num + Number.EPSILON) * precision) / precision;

export const degToRad = (degrees) => degrees * THREE.MathUtils.DEG2RAD;

export const isNumber = (str) => /^-?\d+([\.\,]\d+)?$/.test(str) || /^[\.\,]\d+$/.test(str);

export const remove = (array, index) => {
  const arr = [...array];
  arr.splice(index, 1);
  return arr;
};
