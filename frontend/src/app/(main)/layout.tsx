"use client";
import { AppSidebar } from "@/components/ui/app-sidebar";
import { Footer } from "@/components/ui/footer";
import { Navbar } from "@/components/ui/navbar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import ReactQueryProvider from "@/lib/ReactQueryProvider";
import Image from "next/image";
import { Toaster } from "sonner";

export default function AnimeDetailPage({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="relative">
      <div className="fixed inset-0 -z-10 w-screen h-screen">
        {/* <div className="absolute top-12 left-12 w-32 aspect-square rounded-full blur-2xl bg-primary/20"></div> */}
        <Image src={"/8309.webp"} fill alt="mesh" className="" />
        {/* <MeshGradient
          width={window.innerWidth}
          height={window.innerHeight}
          colors={["#630ee1", "#1b1924"]}
          distortion={0}
          swirl={0.15}
          grainMixer={0.17}
          grainOverlay={0.03}
          speed={0.7}
          rotation={12}
        /> */}
      </div>
      <ReactQueryProvider>
        <SidebarProvider className="">
          <div className="fixed top-0 z-50 mx-auto w-full bg-black/30 backdrop-blur-xl  ">
            <Navbar />
          </div>
          <AppSidebar />
          <SidebarInset className="md:mt-12">{children}</SidebarInset>
          <Toaster />
        </SidebarProvider>
        <Footer />
      </ReactQueryProvider>
    </div>
  );
}
