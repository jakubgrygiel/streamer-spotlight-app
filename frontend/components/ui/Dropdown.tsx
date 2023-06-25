import { FormEvent, ReactNode, useState } from "react";
import DropdownList from "./DropdownList";

interface IDropdownProps {
  label: string;
  placeholder: "avatar" | "image" | "platform";
  value: string;
  hasError: boolean;
  children: ReactNode;
}

export default function Dropdown({
  label,
  value,
  placeholder,
  hasError,
  children,
}: IDropdownProps) {
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);
  function handleClick(e: FormEvent) {
    e.preventDefault();
    setDropdownIsOpen((prevState) => !prevState);
  }
  return (
    <div className="z-10 relative flex flex-col gap-2 w-full">
      <span className="w-full font-semibold text-sm">{label}</span>
      <button
        onClick={handleClick}
        className={`flex justify-between items-center h-10 w-full px-3 font-medium text-[var(--text-dark)] bg-[var(--bg-secondary)] border border-[var(--bg-very-light)] rounded-lg ${
          hasError && "border-[var(--red)]"
        } transition-colors hover:border-[var(--text-secondary)]`}
      >
        <span className={`${value !== "" && "text-[var(--text-main)]"}`}>
          {placeholder === "platform" &&
            (value === "" ? (
              `Choose ${placeholder}`
            ) : (
              <img src={`/assets/icons/icon-dropdown-${value}.svg`} />
            ))}
          {placeholder === "avatar" &&
            (value === "" ? (
              `Choose ${placeholder}`
            ) : (
              <img
                src={`/assets/images/${value}.webp`}
                className="h-6 rounded-full"
              />
            ))}
          {placeholder === "image" &&
            (value === "" ? (
              `Choose ${placeholder}`
            ) : (
              <img
                src={`/assets/images/${value}.webp`}
                className="h-6 rounded"
              />
            ))}
        </span>
        <img
          src="assets/icons/icon-arrow-down.svg"
          alt=""
          className={` transition-transform ${dropdownIsOpen && "rotate-180"}`}
        />
      </button>
      {dropdownIsOpen && <DropdownList>{children}</DropdownList>}
    </div>
  );
}
