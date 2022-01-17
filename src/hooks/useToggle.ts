import React, { useCallback, useState } from "react";

const useToggle = (defaultValue: boolean, callback?: (val: boolean) => void): [boolean, () => void, React.Dispatch<React.SetStateAction<boolean>>] => {
  const [value, setValue] = useState<boolean>(defaultValue || false);
  const toggleFunc = useCallback(
    () => {
      setValue(val => {
        const newVal = !val
        if (callback) callback(newVal)
        return newVal
      })
    },
    [setValue, callback],
  );
  return [value, toggleFunc, setValue]
}

export default useToggle
