import { useCallback, useEffect } from "react";
import shallow from "zustand/shallow";

import { useStore } from "../AppContext";

const useField = (fieldName, defaultValue) => {
  const [state, setState] = useStore(
    useCallback((state) => [state.fields[fieldName], state.set], [fieldName]),
    shallow,
  );

  const setFieldValue = useCallback(
    (filter) => {
      setState((state) => {
        state.fields[fieldName] = filter;
      });
    },
    [setState, fieldName],
  );

  useEffect(() => {
    if (state === undefined && defaultValue !== undefined) {
      setFieldValue(defaultValue);
    }
  }, [state, defaultValue]);

  return [state, setFieldValue];
};

export default useField;
