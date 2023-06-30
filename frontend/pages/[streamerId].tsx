import Profile from "@/components/profile/Profile";
import ErrorInfo from "@/components/ui/ErrorInfo";
import useDataById from "@/hooks/useDataById";
import { useRouter } from "next/router";

export default function ProfilePage() {
  const router = useRouter();
  const { streamer, error } = useDataById(router.query.streamerId as string);

  if (error) {
    return <ErrorInfo />;
  }

  if (!router.query.streamerId) {
    return <Profile />;
  }

  return <Profile data={streamer} />;
}
