"use client";
import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { useIsMobile } from "@/hooks/use-mobile";
import { Archive, CalendarClock, Home } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Tooltip, TooltipContent, TooltipTrigger } from "./tooltip";

// This is sample data.
const data = [
  {
    title: "Home",
    url: "/home",
    icon: <Home className="w-5 h-5" />,
    isActive: false,
  },
  {
    title: "A-Z List",
    url: "/list-anime",
    icon: <Archive className="w-5 h-5" />,
    isActive: false,
  },
  {
    title: "Schedule",
    url: "/schedule",
    icon: <CalendarClock className="w-5 h-5" />,
    isActive: false,
  },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const isMobile = useIsMobile();
  const [navList, setNavList] = React.useState(data);
  const pathname = usePathname();

  React.useEffect(() => {
    setNavList((prev) =>
      prev.map((item) => {
        return { ...item, isActive: item.url === pathname };
      }),
    );
  }, [pathname]);

  return (
    <Sidebar collapsible="icon" {...props} className="relative">
      {isMobile && (
        <SidebarHeader className="mt-12 ml-6">
          <Link href="/home" className="flex items-center gap-4 w-max">
            <h3 className="scroll-m-20 pb-2 text-2xl font-bold tracking-tight first:mt-0 inline-block bg-linear-to-r from-primary to-accent-foreground text-transparent bg-clip-text">
              Granime
            </h3>{" "}
          </Link>
        </SidebarHeader>
      )}
      <SidebarContent className="flex flex-col justify-center items-center px-4">
        {/* <SidebarTrigger /> */}
        <SidebarMenu className="flex flex-col gap-6">
          {navList.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                asChild
                isActive={item.isActive}
                className="p-6"
              >
                <Link href={item.url} className="flex items-center gap-4">
                <Tooltip key={item.title}>
                  <TooltipTrigger className="relative flex items-center justify-center" asChild>
                    <span className="absolute z-20">{item.icon}</span>
                  </TooltipTrigger>
                  <TooltipContent side="right">
                    {item.title}
                  </TooltipContent>
                </Tooltip>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}
