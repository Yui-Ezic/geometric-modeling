import React from "react";
import SceneComponent from "./Scene";
import {SideBarHeader} from "./SideBarHeader";

import { MdBorderInner } from "react-icons/md";

export const prefix = "1-";

export const menuItems = [
    {
        type: "slider",
        fieldName: `${prefix}squareSideSize`,
        title: "N",
        defaultValue: 36,
        minValue: 0.1,
        maxValue: 25,
        step: 0.1,
    },
    {
        type: "slider",
        fieldName: `${prefix}innerCircleRadius`,
        title: "R1",
        defaultValue: 1,
        minValue: 0.05,
        maxValue: 10,
        step: 0.05,
    },
    {
        type: "slider",
        fieldName: `${prefix}outterCircleRadius`,
        title: "R2",
        defaultValue: 1.5,
        minValue: 0.05,
        maxValue: 10,
        step: 0.05,
    },
    {
        type: "slider",
        fieldName: `${prefix}cornerCircleRadius`,
        title: "R3",
        defaultValue: 1,
        minValue: 0,
        maxValue: 10,
        step: 0.05,
    }
];

export const scene = {
    title: "Форма фигуры",
    icon: <MdBorderInner />,
    scene: <SceneComponent />,
    sideBarHeader: <SideBarHeader />,
    menuItems,
    initialValues: {},
};