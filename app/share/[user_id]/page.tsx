import { getProfileById } from "@/actions/auth/user.action";
import { permanentRedirect } from "next/navigation";

interface SharePageProps {
  params: { user_id: string };
  searchParams: {};
}

const SharePage = async (props: SharePageProps) => {
  const userId = props?.params?.user_id;
  const profile = await getProfileById({ serverComponent: true, userId });

  if (!profile) permanentRedirect("/");

  return <div>share page</div>;
};

export default SharePage;
