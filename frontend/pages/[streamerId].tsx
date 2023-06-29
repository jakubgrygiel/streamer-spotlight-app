import Profile from "@/components/profile/Profile";
import useDataById from "@/hooks/useDataById";
import { useRouter } from "next/router";

export default function ProfilePage() {
  const router = useRouter();
  const { streamer } = useDataById(router.query.streamerId as string);
  if (!router.query.streamerId) {
    return (
      <>
        <Profile />
      </>
    );
  }
  return (
    <>
      <Profile data={streamer} />
    </>
  );
}
