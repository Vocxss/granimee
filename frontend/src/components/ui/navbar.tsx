"use client";
import { useIsMobile } from "@/hooks/use-mobile";
import { Menu } from "lucide-react";
import Image from "next/image";
import { ProfileButton } from "../profilebutton";
import { SearchTrigger } from "./search";
import { useSidebar } from "./sidebar";

const MobileNavbar = () => {
  const { toggleSidebar } = useSidebar();
  return (
    <div className="justify-between flex items-center px-5 py-3 border-b border-white/30">
      <div className="max-w-64 w-1/4">
        <Menu
          className="w-6 h-6 text-white cursor-pointer"
          onClick={toggleSidebar}
        />
      </div>
      <div className="w-2/3 flex justify-end items-center gap-2">
        <SearchTrigger />
        <ProfileButton />
      </div>
    </div>
  );
};

const DekstopNavbar = () => {
  return (
    <div className="justify-between flex items-center px-8 py-3 border-b border-white/30">
      <div className="max-w-24 ">
        <Image
          src={"/logo-detail.webp"}
          width={1280}
          height={567}
          alt="logo"
          className="object-cover w-full aspect-auto"
        />
        {/* <H4 text="Granime" /> */}
      </div>
      <div className="w-1/3">
        <SearchTrigger />
      </div>
      <div className="w-1/3 flex justify-end gap-4 items-center">
        <ProfileButton />
      </div>
    </div>
  );
};

export const Navbar = () => {
  const isMobile = useIsMobile();

  return isMobile ? <MobileNavbar /> : <DekstopNavbar />;
};
