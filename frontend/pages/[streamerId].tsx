import Profile from "@/components/profile/Profile";
import useGetDataById from "@/hooks/useGetDataById";
import { useRouter } from "next/router";

export default function ProfilePage() {
  const router = useRouter();
  const { streamer } = useGetDataById(router.query.streamerId as string);
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
