import * as React from "react";
import styled from "@emotion/styled";
import { Checkbox, CheckboxGroup } from "@chakra-ui/react";

import { useField } from "scripts";

const StyledCheckbox = styled(Checkbox)`
  color: var(--color-gray-70);
  margin-bottom: 1.5em;
`;

export const Switcher = ({
  item: { fieldName, title, defaultValue },
  disabled = false,
}) => {
  const [checked, setChecked] = useField(fieldName, defaultValue);

  return (
    <CheckboxGroup value={checked ? ["1"] : []} onChange={(st) => setChecked(st.length > 0)}>
      <StyledCheckbox value="1" isDisabled={disabled}>
        {title}
      </StyledCheckbox>
    </CheckboxGroup>
  );
};
