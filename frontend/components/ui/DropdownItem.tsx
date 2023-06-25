import { FormEvent } from "react";

interface IDropdownItemProps {
  imageSrc: string;
  label: string;
  handleChange: (newValue: string) => void;
  closeDropdown: () => void;
}

export default function DropdownItem({
  imageSrc,
  label,
  handleChange,
  closeDropdown,
}: IDropdownItemProps) {
  function handleClick(e: FormEvent) {
    e.preventDefault();
    handleChange(label);
    closeDropdown();
  }
  return (
    <li className="w-full">
      <button
        onClick={handleClick}
        className="h-8 px-2 w-full transition-colors rounded hover:bg-[var(--bg-very-light)]"
      >
        <img src={`assets/${imageSrc}`} alt={label} className=" h-4" />
      </button>
    </li>
  );
}
