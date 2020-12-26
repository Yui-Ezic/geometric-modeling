import * as React from "react";
import styled from "@emotion/styled";

import Button from "components/Button";
import { useAction } from "scripts";

const StyledButton = styled(Button)`
  margin: 1em 0;
`;

export const Action = ({ item: { fieldName, title = "action" } }) => {
  const { call } = useAction(fieldName);

  return (
    <StyledButton type="button" onClick={call} data-full-width>
      {title}
    </StyledButton>
  );
};
