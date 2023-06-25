import { FormEvent } from "react";

interface IDropdownItemImageProps {
  imageSrc: string;
  label: string;
  height: number;
  width: number;
  circle: boolean;
  handleChange: (newValue: string) => void;
}

export default function DropdownItemImage({
  imageSrc,
  label,
  height,
  width,
  circle,
  handleChange,
}: IDropdownItemImageProps) {
  function handleClick(e: FormEvent) {
    e.preventDefault();
    handleChange(label);
  }
  return (
    <li className="flex justify-center w-full">
      <button
        onClick={handleClick}
        className={` p-[2px] transition-colors ${
          circle ? "rounded-full" : "rounded"
        } transition-colors hover:bg-[var(--text-main)]`}
      >
        <img
          src={`assets/${imageSrc}`}
          alt={label}
          className={`h-${height} w-${width} transition-colors ${
            circle ? "rounded-full" : "rounded"
          }`}
        />
      </button>
    </li>
  );
}
