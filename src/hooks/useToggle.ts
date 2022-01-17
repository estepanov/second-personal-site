import React, { useCallback, useState } from "react";

const useToggle = (defaultValue: boolean): [boolean, () => void, React.Dispatch<React.SetStateAction<boolean>>] => {
  const [value, setValue] = useState<boolean>(defaultValue || false);
  const toggleFunc = useCallback(
    () => {
      setValue(val => !val)
    },
    [setValue],
  );
  return [value, toggleFunc, setValue]
}

export default useToggle
