import { FormEvent, ReactNode, useState } from "react";
import DropdownList from "./DropdownList";

interface IDropdownProps {
  label: string;
  placeholder: "avatar" | "image" | "platform";
  value: string;
  hasError: boolean;
  isOpen: boolean;
  toggleIsOpen: (e: FormEvent) => void;
  children: ReactNode;
}

export default function Dropdown({
  label,
  value,
  placeholder,
  hasError,
  isOpen,
  toggleIsOpen,
  children,
}: IDropdownProps) {
  return (
    <div className="z-10 relative flex flex-col gap-2 w-full">
      <span className="w-full font-semibold text-sm">{label}</span>
      <button
        onClick={toggleIsOpen}
        className={`flex justify-between items-center h-10 w-full px-3 font-medium text-[var(--text-dark)] bg-[var(--bg-secondary)] border border-[var(--bg-very-light)] rounded-lg ${
          hasError && "border-[var(--red)]"
        } transition-colors hover:border-[var(--text-secondary)]`}
      >
        <span className={`${value !== "" && "text-[var(--text-main)]"}`}>
          {placeholder === "platform" &&
            (value === "" ? (
              `Choose ${placeholder}`
            ) : (
              <img
                src={`/assets/icons/icon-dropdown-${value}.svg`}
                className=" h-5"
                alt="platform"
              />
            ))}
          {placeholder === "avatar" &&
            (value === "" ? (
              `Choose ${placeholder}`
            ) : (
              <img
                src={`/assets/images/${value}.webp`}
                className="h-6 rounded-full"
                alt="avatar"
              />
            ))}
          {placeholder === "image" &&
            (value === "" ? (
              `Choose ${placeholder}`
            ) : (
              <img
                src={`/assets/images/${value}.webp`}
                className="h-6 rounded"
                alt="image"
              />
            ))}
        </span>
        <img
          src="assets/icons/icon-arrow-down.svg"
          alt=""
          className={` transition-transform ${isOpen && "rotate-180"}`}
        />
      </button>
      {isOpen && <DropdownList>{children}</DropdownList>}
    </div>
  );
}
