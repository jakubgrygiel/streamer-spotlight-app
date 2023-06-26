import { FormEvent, useState } from "react";
import Dropdown from "../ui/Dropdown";
import DropdownItem from "../ui/DropdownItem";
import useDropdown from "@/hooks/useDropdown";
import { TPlatform } from "@/data/dummy-data";

const platforms: TPlatform[] = [
  "youtube",
  "tiktok",
  "twitch",
  "rumble",
  "kick",
];

interface IDropdownPlatformProps {
  value: string;
  hasError: boolean;
  handleChange: (newValue: string) => void;
}

export default function DropdownPlatform({
  value,
  hasError,
  handleChange,
}: IDropdownPlatformProps) {
  const { isOpen, toggleIsOpen, closeDropdown } = useDropdown();

  return (
    <Dropdown
      label="Platform"
      placeholder="platform"
      value={value}
      isOpen={isOpen}
      toggleIsOpen={toggleIsOpen}
      hasError={hasError}
    >
      <ul className="flex flex-col gap-1 w-full">
        {platforms.map((item) => (
          <DropdownItem
            key={item}
            imageSrc={`icons/icon-dropdown-${item}.svg`}
            label={item}
            handleChange={handleChange}
            closeDropdown={closeDropdown}
          />
        ))}
      </ul>
    </Dropdown>
  );
}
