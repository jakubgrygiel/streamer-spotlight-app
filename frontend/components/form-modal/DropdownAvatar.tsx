import Dropdown from "../ui/Dropdown";

interface IDropdownAvatarProps {}

export default function DropdownAvatar() {
  return (
    <Dropdown label="Profile avatar" placeholder="avatar" hasError={false}>
      <span>avatar</span>
    </Dropdown>
  );
}
