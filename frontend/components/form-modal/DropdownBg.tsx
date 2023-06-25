import useDropdown from "@/hooks/useDropdown";
import Dropdown from "../ui/Dropdown";
import DropdownItemImage from "../ui/DropdownItemImage";

const images: IImage[] = [
  { imageSrc: "images/bg-1.webp", label: "bg-1" },
  { imageSrc: "images/bg-2.webp", label: "bg-2" },
  { imageSrc: "images/bg-3.webp", label: "bg-3" },
  { imageSrc: "images/bg-4.webp", label: "bg-4" },
  { imageSrc: "images/bg-5.webp", label: "bg-5" },
  { imageSrc: "images/bg-6.webp", label: "bg-6" },
  { imageSrc: "images/bg-7.webp", label: "bg-7" },
  { imageSrc: "images/bg-8.webp", label: "bg-8" },
  { imageSrc: "images/bg-9.webp", label: "bg-9" },
  { imageSrc: "images/bg-10.webp", label: "bg-10" },
  { imageSrc: "images/bg-11.webp", label: "bg-11" },
  { imageSrc: "images/bg-12.webp", label: "bg-12" },
];

interface IImage {
  imageSrc: string;
  label: string;
}

interface IDropdownBgProps {
  value: string;
  hasError: boolean;
  handleChange: (newValue: string) => void;
}

export default function DropdownBg({
  value,
  hasError,
  handleChange,
}: IDropdownBgProps) {
  const { isOpen, toggleIsOpen, closeDropdown } = useDropdown();

  return (
    <Dropdown
      label="Profile background"
      placeholder="background"
      value={value}
      isOpen={isOpen}
      toggleIsOpen={toggleIsOpen}
      hasError={hasError}
    >
      <ul className="grid grid-cols-3 gap-2 w-full ">
        {images.map((item) => (
          <DropdownItemImage
            key={item.label}
            imageSrc={item.imageSrc}
            label={item.label}
            height={7}
            width={10}
            circle={false}
            closeDropdown={closeDropdown}
            handleChange={handleChange}
          />
        ))}
      </ul>
    </Dropdown>
  );
}
