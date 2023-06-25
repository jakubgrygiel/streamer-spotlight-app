import Dropdown from "../ui/Dropdown";

interface IDropdownBgProps {}

export default function DropdownBg() {
  return (
    <Dropdown label="Profile background" placeholder="image" hasError={false}>
      <span>image</span>
    </Dropdown>
  );
}
