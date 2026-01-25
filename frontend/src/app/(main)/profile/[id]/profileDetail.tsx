"use client";
import { Profile } from "@/lib/getProfile";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { zodResolver } from "@hookform/resolvers/zod";
import { ImageUp, Pencil } from "lucide-react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";
export const ProfileDetail = ({ session }: { session: Profile | null }) => {
  const formSchema = z.object({
    username: z.string().min(1, "Username is required!"),
    image: z.custom<File | string | null>(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      image: null,
    },
  });

  useEffect(() => {
    if (session) {
      form.reset({
        username: session.username ?? "",
        image: session.picture ?? null,
      });
    }
  }, [session, form]);

  const profileSubmit = async (values: z.infer<typeof formSchema>) => {
    const formData = new FormData();
    formData.append("username", values.username);
    formData.append("image", values.image);

    const response = await fetch("http://localhost:3000/api/user/profile", {
      method: "PUT",
      body: formData,
    });
    if (!response.ok) {
      toast.error("Failed to update profile!");
      return;
    }
    toast.success("Profile updated successfully!");

    window.location.reload();
  };

  return (
    <div className="flex flex-col md:flex-row md:gap-0 gap-6 w-full justify-between items-center">
      <div className="flex gap-8 flex-wrap md:justify-normal justify-center items-center">
        <div className="flex max-w-[200px] w-full justify-center items-center relative">
          <Avatar className="w-[200px] h-[200px]">
            {session?.picture && session?.picture !== "" ? (
              <AvatarImage
                className="w-[200px] h-[200px]"
                width={480}
                height={480}
                src={session?.picture}
              />
            ) : (
              <AvatarFallback>
                {session?.email?.charAt(0).toUpperCase()}
              </AvatarFallback>
            )}
          </Avatar>
          <div className="absolute bottom-0 right-0 max-w-12 w-full aspect-square group cursor-pointer">
            <input
              type="file"
              className="absolute bottom-0 right-0 z-10 opacity-0 w-full h-full cursor-pointer"
            />
            <Button
              variant={"outline"}
              className="text-sm aspect-square absolute bottom-0 right-0 group-hover:text-accent-foreground group-hover:bg-background"
            >
              <ImageUp className="w-5 h-5" />
            </Button>
          </div>
        </div>
        <p className="text-2xl font-bold ">{session?.username}</p>
      </div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">
            <Pencil className="w-5 h-5" /> Edit Profile
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(profileSubmit)}>
              <div className="grid gap-6">
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem className="grid gap-3">
                      <FormLabel>Username</FormLabel>
                      <Input {...field} autoComplete="off" />
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="image"
                  render={({ field }) => (
                    <FormItem className="grid gap-3">
                      <FormLabel>Profile Image</FormLabel>
                      <InputGroup className="cursor-pointer h-10 dark:bg-accent/30 py-1 flex justify-center items-center">
                        <InputGroupInput
                          className="flex justify-center items-center cursor-pointer"
                          type="file"
                          accept="image/*"
                          onChange={(e) => {
                            const file = e.target.files?.[0] ?? null;
                            form.setValue("image", file);
                          }}
                        />
                        <InputGroupAddon align="inline-end">
                          <ImageUp />
                        </InputGroupAddon>
                      </InputGroup>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <DialogFooter className="mt-6">
                <DialogClose asChild>
                  <Button variant="outline" onClick={() => form.reset()}>
                    Cancel
                  </Button>
                </DialogClose>
                <Button type="submit">Save changes</Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
};
