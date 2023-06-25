import { FormEvent, useState } from "react";

export default function useDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleIsOpen(e: FormEvent) {
    e.preventDefault();
    setIsOpen((prevState) => !prevState);
  }

  function closeDropdown() {
    setIsOpen(false);
  }
  return { isOpen, toggleIsOpen, closeDropdown };
}
