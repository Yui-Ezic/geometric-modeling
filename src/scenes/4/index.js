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
    defaultValue: true,
  },
  {
    type: "switcher",
    fieldName: `${prefix}use-rotate`,
    title: "Включить вращение",
    defaultValue: false,
  },
  {
    type: "optional-group",
    fieldName: `${prefix}offset-texture`,
    title: "Смещение текстуры",
    defaultValue: false,
    items: [
      {
        type: "slider",
        fieldName: `${prefix}offset-x`,
        title: "Смещение по Х",
        defaultValue: 0,
        step: 0.1,
        minValue: -2,
        maxValue: 2,
      },
      {
        type: "slider",
        fieldName: `${prefix}offset-y`,
        title: "Смещение по Y",
        defaultValue: 0,
        step: 0.1,
        minValue: -2,
        maxValue: 2,
      },
    ],
  },
  {
    type: "optional-group",
    fieldName: `${prefix}shape`,
    title: "Отрегулировать размеры фигуры",
    defaultValue: false,
    items: [
      {
        type: "slider",
        fieldName: `${prefix}radius-top`,
        title: "Верхний радиус",
        defaultValue: 2,
        step: 0.1,
        minValue: 0.5,
        maxValue: 4,
      },
      {
        type: "slider",
        fieldName: `${prefix}radius-bottom`,
        title: "Нижний радиус",
        defaultValue: 2,
        step: 0.1,
        minValue: 0.5,
        maxValue: 4,
      },
      {
        type: "slider",
        fieldName: `${prefix}height`,
        title: "Высота",
        defaultValue: 6,
        step: 0.1,
        minValue: 0.5,
        maxValue: 10,
      },
    ],
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
