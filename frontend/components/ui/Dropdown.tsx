import { FormEvent } from "react";

interface IDropdownProps {
  //   id: string;
  label: string;
  placeholder: string;
  //   value: string;
  hasError: boolean;
  //   handleChange: (value: string) => void;
  //   handleBlur: () => void;
}

export default function Dropdown({
  label,
  placeholder,
  hasError,
}: IDropdownProps) {
  function handleClick(e: FormEvent) {
    e.preventDefault();
  }
  return (
    <div className="flex flex-col gap-2 w-full">
      <span className="w-full font-semibold text-sm">{label}</span>
      <button
        onClick={handleClick}
        className={`flex justify-between items-center h-10 w-full px-3 font-medium text-[var(--text-dark)] bg-[var(--bg-secondary)] border border-[var(--bg-very-light)] rounded-lg ${
          hasError && "border-[var(--red)]"
        } transition-colors hover:border-[var(--text-secondary)]`}
      >
        <span>Choose {placeholder}</span>
        <img src="assets/icons/icon-arrow-down.svg" alt="" />
      </button>
    </div>
  );
}
