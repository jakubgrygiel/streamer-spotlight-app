import { IData } from "@/data/dummy-data";
import UserAvatarWithBg from "../ui/UserAvatarWithBg";
import PlatformLogo from "../card/PlatformLogo";
import Rating from "../ui/Rating";

const DUMMY_USER: IData = {
  id: "gj3pvhpu80e0kzggr6jqo005",
  name: "CyberWarrior",
  description:
    "I'm a fearless streamer who dives headfirst into the virtual realm. Join me on thrilling gaming adventures filled with heart-pounding action, epic battles, and jaw-dropping moments. Together, we'll conquer every virtual challenge that comes our way!",
  platform: "twitch",
  avatar: "user-1",
  background: "bg-1",
  rate: 0,
};

export default function Profile() {
  const data = DUMMY_USER;
  return (
    <section className="w-full bg-[var(--bg-secondary)] rounded-xl  border border-[var(--bg-light)]">
      <UserAvatarWithBg data={data} />
      <div className="flex flex-col gap-3 p-6 pt-3">
        <div className="flex flex-col gap-3 ml-[112px] md:ml-0">
          <div className="flex items-center gap-3 md:ml-[112px]">
            <PlatformLogo platform={data.platform} />
            <span className="text-[var(--text-dark)] text-xs font-medium">
              @{data.name}
            </span>
          </div>
          <p className="text-[var(--text-main)] md:mt-4">{data.description}</p>
          <div className="flex justify-between items-center gap-4 mt-4">
            <span className="font-semibold text-lg text-[var(--text-main)]">
              Please give me a thumbs up!
            </span>
            <Rating id={data.id} rate={data.rate} />
          </div>
        </div>
      </div>
    </section>
  );
}
