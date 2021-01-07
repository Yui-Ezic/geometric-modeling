import React from "react";
import { MdLanguage } from "react-icons/md";

import { SideBarHeader } from "./SideBarHeader";
import SceneComponent from "./Scene";

export const prefix = "4-";

export const menuItems = [
  {
    type: "slider",
    fieldName: `${prefix}pos-x`,
    title: "Сдвиг по x",
    defaultValue: 10,
    minValue: 0,
    maxValue: 20,
  },
  {
    type: "slider",
    fieldName: `${prefix}pos-y`,
    title: "Сдвиг по y",
    defaultValue: 10,
    minValue: 0,
    maxValue: 20,
  },
  {
    type: "slider",
    fieldName: `${prefix}pos-z`,
    title: "Сдвиг по z",
    defaultValue: 10,
    minValue: 0,
    maxValue: 20,
  },
  {
    type: "switcher",
    fieldName: `${prefix}use-texture`,
    title: "Включить текстуру",
    defaultValue: false,
  },
];

export const scene = {
  title: "Объёмные фигуры",
  icon: <MdLanguage />,
  sideBarHeader: <SideBarHeader />,
  menuItems,
  scene: <SceneComponent />,
  initialValues: {},
};
