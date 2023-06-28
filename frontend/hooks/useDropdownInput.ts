import { useState } from "react";

export default function useDropdownInput() {
  const [value, setValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const isInvalid = value === "";

  const hasError = isInvalid && isTouched;

  function handleBlur() {
    setIsTouched(true);
  }

  function handleChange(newValue: string) {
    setValue(newValue);
  }

  return { value, isInvalid, hasError, handleBlur, handleChange };
}
