import { TPlatform } from "@/types/data-types";

interface IPlatformLogoProps {
  platform: TPlatform;
}
export default function PlatformLogo({ platform }: IPlatformLogoProps) {
  return (
    <img src={`assets/icons/icon-${platform}.svg`} alt={`${platform} icon`} />
  );
}
