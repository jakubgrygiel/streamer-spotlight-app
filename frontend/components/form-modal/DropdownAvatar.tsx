import Dropdown from "../ui/Dropdown";
import DropdownItemImage from "../ui/DropdownItemImage";

const avatars: IAvatar[] = [
  { imageSrc: "images/user-1.webp", label: "user-1" },
  { imageSrc: "images/user-2.webp", label: "user-2" },
  { imageSrc: "images/user-3.webp", label: "user-3" },
  { imageSrc: "images/user-4.webp", label: "user-4" },
  { imageSrc: "images/user-5.webp", label: "user-5" },
  { imageSrc: "images/user-6.webp", label: "user-6" },
  { imageSrc: "images/user-7.webp", label: "user-7" },
  { imageSrc: "images/user-8.webp", label: "user-8" },
  { imageSrc: "images/user-9.webp", label: "user-9" },
  { imageSrc: "images/user-10.webp", label: "user-10" },
  { imageSrc: "images/user-11.webp", label: "user-11" },
  { imageSrc: "images/user-12.webp", label: "user-12" },
];

interface IAvatar {
  imageSrc: string;
  label: string;
}

interface IDropdownAvatarProps {
  value: string;
  hasError: boolean;
  handleChange: (newValue: string) => void;
}

export default function DropdownAvatar({
  value,
  hasError,
  handleChange,
}: IDropdownAvatarProps) {
  return (
    <Dropdown
      label="Profile avatar"
      placeholder="avatar"
      value={value}
      hasError={hasError}
    >
      <ul className="grid grid-cols-3 gap-2 w-full">
        {avatars.map((item) => (
          <DropdownItemImage
            imageSrc={item.imageSrc}
            label={item.label}
            height={10}
            width={10}
            circle={true}
            handleChange={handleChange}
          />
        ))}
      </ul>
    </Dropdown>
  );
}
