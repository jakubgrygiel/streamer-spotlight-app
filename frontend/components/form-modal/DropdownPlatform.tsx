import Dropdown from "../ui/Dropdown";

interface IDropdownPlatformProps {}

export default function DropdownPlatform() {
  return (
    <Dropdown label="Platform" placeholder="platform" hasError={false}>
      <span>platform</span>
    </Dropdown>
  );
}
