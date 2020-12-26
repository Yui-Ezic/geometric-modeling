import * as React from "react";
import styled from "@emotion/styled";

import { MenuItems } from "components";

const Wrapper = styled.div`
  margin-top: 2em;
  margin-bottom: 2em;

  & .group-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.5em;
    & > .group-title {
      color: var(--color-gray-70);
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
    }
  }
`;

export const Group = ({ item: { title, items }, disabled = false }) => {
  return (
    <Wrapper>
      <div className="group-header">
        <div className="group-title">{title}</div>
      </div>
      <div>
        <MenuItems items={items} disabled={disabled} />
      </div>
    </Wrapper>
  );
};
