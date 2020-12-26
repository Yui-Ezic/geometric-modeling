import * as React from "react";

import { Slider } from "components";
import { Group } from "./Group";
import { Switcher } from "./Switcher";
import { OptionalGroup } from "./OptionalGroup";
import { Action } from "./Action";
import { DoubleAction } from "./DoubleAction";
import { DoubleInputAction } from "./DoubleInputAction";
// import { CurvePoints } from "./CurvePoints";

const MenuItemMemo = ({ item, ...props }) => {
  if (!item) return null;
  if (item.type === "slider") return <Slider item={item} {...props} />;
  if (item.type === "group") return <Group item={item} {...props} />;
  if (item.type === "switcher") return <Switcher item={item} {...props} />;
  if (item.type === "optional-group") {
    return <OptionalGroup item={item} {...props} />;
  }
  if (item.type === "action") return <Action item={item} {...props} />;
  if (item.type === "double-action")
    return <DoubleAction item={item} {...props} />;
  if (item.type === "double-input-action")
    return <DoubleInputAction item={item} {...props} />;
  // if (item.type === "curve-points") return <CurvePoints item={item} {...props} />;
  return null;
};
export const MenuItem = React.memo(MenuItemMemo);

export const MenuItems = ({ items, disabled = false }) => (
  <ul>
    {items?.map((item) => (
      <li key={item.fieldName}>
        <MenuItem item={item} disabled={disabled} />
      </li>
    ))}
  </ul>
);
