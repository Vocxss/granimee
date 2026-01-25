import { supabase } from "@/lib/supabaseClient";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useProfile } from "@/lib/getProfile";

export const ProfileButton = () => {
  const [isProfile, setIsProfile] = useState(false);
  const handleLogout = async () => {
    await supabase.auth.signOut();
    setIsProfile(false);
  };

  const session = useProfile();

  useEffect(() => {
    if (session) {
      setIsProfile(true);
    } else {
      setIsProfile(false);
    }
  }, [session]);

  // console.log(session);

  return (
    <div>
      {isProfile ? (
        <DropdownMenu>
          <DropdownMenuTrigger className="border-none" asChild>
            <DropdownMenuLabel className="p-0 font-normal size-12 flex flex-col justify-center items-center gap-2">
              <Avatar className="md:w-full md:h-full w-10 h-10">
                {session?.picture ? (
                  <AvatarImage src={session?.picture} className="" />
                ) : (
                  <AvatarFallback className="w-6 h-6">
                    {session?.email?.charAt(0).toUpperCase()}
                  </AvatarFallback>
                )}
              </Avatar>
            </DropdownMenuLabel>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mr-4">
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Link href={`/profile/${session?.id}`} className="text-xs">
                  Profile
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <span
                  onClick={handleLogout}
                  className="w-full cursor-pointer text-xs text-destructive"
                >
                  Logout
                </span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <div>
          <Link href={"/auth/login"}>
            <Button variant={"outline"} className="">
              Login
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};
