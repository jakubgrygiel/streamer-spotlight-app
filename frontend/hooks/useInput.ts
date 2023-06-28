import { useState } from "react";

export default function useInput() {
  const [value, setValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const isInvalid = value.trim() === "";

  const hasError = isInvalid && isTouched;

  function handleBlur() {
    setIsTouched(true);
  }

  function handleChange(newValue: string) {
    setValue(newValue);
  }

  return { value, hasError, isInvalid, handleBlur, handleChange };
}
