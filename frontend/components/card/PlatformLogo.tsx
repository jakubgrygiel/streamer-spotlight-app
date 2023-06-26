import { TPlatform } from "@/data/dummy-data";

interface IPlatformLogoProps {
  platform: TPlatform;
}
export default function PlatformLogo({ platform }: IPlatformLogoProps) {
  return (
    <img src={`assets/icons/icon-${platform}.svg`} alt={`${platform} icon`} />
  );
}
