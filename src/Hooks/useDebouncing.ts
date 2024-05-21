"use client";
import { useEffect, useState } from "react";
import debounce from "lodash/debounce";

export const useDebouncing = ({
  initialValue = "",
  debounceTime = 1000,
} = {}) => {
  const [inputValue, setInputValue] = useState(initialValue);
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    const search = debounce((value: string) => setValue(value), debounceTime);
    search(inputValue);

    return () => search.cancel();
  }, [inputValue, debounceTime]);

  const clearValue = () => setValue("");

  return {
    onDebounce: setInputValue,
    value,
    clearValue,
  };
};

// export default function SearchPage() {
//   const [inputValue, setInputValue] = React.useState("");

//   React.useEffect(() => {
//     search(inputValue);

//     return () => search.cancel();
//   }, [inputValue]);

//   return (
//     <input
//       type="text"
//       value={inputValue}
//       onChange={(e) => setInputValue(e.target.value)}
//     />
//   );
// }
