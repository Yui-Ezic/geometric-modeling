import React from "react";
import { MdPolymer } from "react-icons/md";

import { SideBarHeader } from "./SideBarHeader";
import SceneComponent from "./Scene";

export const prefix = "3-";

export const menuItems = [
  {
    type: "slider",
    fieldName: `${prefix}iterations`,
    title: "Итераций",
    defaultValue: 1,
    minValue: 1,
    maxValue: 5,
  },
  {
    type: "optional-group",
    fieldName: `${prefix}show-advanced`,
    title: "Показать дополнительные настройки",
    defaultValue: false,
    items: [
      {
        type: "slider",
        fieldName: `${prefix}length`,
        title: "Длина линии",
        step: 0.1,
        defaultValue: 1,
        minValue: 0.1,
        maxValue: 5,
      },
      {
        type: "slider",
        fieldName: `${prefix}start-x`,
        title: "Сдвиг по x",
        defaultValue: 0,
        minValue: -500,
        maxValue: 200,
      },
      {
        type: "slider",
        fieldName: `${prefix}start-y`,
        title: "Сдвиг по y",
        defaultValue: 0,
        minValue: -200,
        maxValue: 200,
      }
    ],
  },
];

export const scene = {
  title: "Наконечник серпинского",
  icon: <MdPolymer />,
  sideBarHeader: <SideBarHeader />,
  menuItems,
  scene: <SceneComponent />,
  initialValues: {},
};
