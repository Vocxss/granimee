import { supabaseServer } from "@/lib/supabaseServer";
import { ProfileDetail } from "./profileDetail";
import { WatchHistory } from "./watchhistory";

export default async function ProfilePage() {
  const supabase = await supabaseServer();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  let session = null;
  if (user) {
    const { data } = await supabase
      .from("user")
      .select("*")
      .eq("id", user.id)
      .single();
    session = data;
  }

  return (
    <div className="flex flex-col justify-center items-center p-8 mx-8 my-16 gap-12">
      <ProfileDetail session={session} />
      <WatchHistory />
    </div>
  );
}
