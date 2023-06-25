import Dropdown from "../ui/Dropdown";
import DropdownItem from "../ui/DropdownItem";

const platforms = ["youtube", "tiktok", "twitch", "rumble", "kick"];

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
  return (
    <Dropdown
      label="Platform"
      placeholder="platform"
      value={value}
      hasError={hasError}
    >
      <ul className="flex flex-col gap-1 w-full">
        {platforms.map((item) => (
          <DropdownItem
            imageSrc={`icons/icon-dropdown-${item}.svg`}
            label={item}
            handleChange={handleChange}
          />
        ))}
      </ul>
    </Dropdown>
  );
}
