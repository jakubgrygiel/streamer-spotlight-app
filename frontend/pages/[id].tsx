import Profile from "@/components/profile/Profile";
import { IData } from "@/data/dummy-data";

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

export default function ProfilePage() {
  return (
    <>
      <Profile data={DUMMY_USER} />
    </>
  );
}
