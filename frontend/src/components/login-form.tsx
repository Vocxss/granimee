"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { supabase } from "@/lib/supabaseClient";
import { BackendIP2, cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeClosed, User } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
import { toast } from "sonner";
import { z } from "zod";
import { Form, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";

export const LoginForm = ({
  className,
  ...props
}: React.ComponentProps<"div">) => {
  const [showPass, setShowPass] = useState(false);
  const [message, setMessage] = useState("");

  const router = useRouter();

  const formSchema = z.object({
    email: z
      .email({
        message: "Email not valid!",
      })
      .min(1, "Email is required!"),
    password: z.string().min(1, "Password is required!"),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const googleLogin = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `/auth/callback`,
      },
    });

    if (error) console.error(error.message);
  };

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    setMessage("");

    const validation = formSchema.safeParse(values);
    if (!validation.success) {
      setMessage(validation.error.message);
    }

    const { data, error } = await supabase.auth.signInWithPassword({
      email: values.email,
      password: values.password,
    });

    if (error) {
      toast.error(error.message);
      return;
    } else {
      toast.success("Login Success!");
      router.push("/auth/callback");
      form.reset();
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="flex justify-center text-xl mb-1">
            Login
          </CardTitle>
          <CardDescription className="text-center">
            Enter your email and password to login.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className="space-y-4"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <div className="relative">
                      <Input placeholder="sasuke@example.com" {...field} />
                      <User className="w-5 h-5 absolute top-1.5 right-3.5 text-muted-foreground" />
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <div className="relative">
                      <Input
                        type={showPass ? "text" : "password"}
                        autoComplete="off"
                        {...field}
                      />
                      <button
                        type="button"
                        className="cursor-pointer"
                        onClick={() => setShowPass(!showPass)}
                      >
                        {showPass ? (
                          <EyeClosed className="w-5 h-5 absolute top-1.5 right-3.5 text-muted-foreground" />
                        ) : (
                          <Eye className="w-5 h-5 absolute top-1.5 right-3.5 text-muted-foreground" />
                        )}
                      </button>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
              <div className="flex flex-col items-center justify-center gap-4">
                <Button type="submit" className="w-full">
                  Login
                </Button>
                <div className="flex gap-4 w-4/5 items-center">
                  <span className="h-[1px] w-full bg-muted"></span>
                  <p className="text-sm text-muted-foreground">Or</p>
                  <span className="h-[1px] w-full bg-muted"></span>
                </div>
                <Button
                  type="button"
                  variant={"outline"}
                  className="w-full"
                  onClick={googleLogin}
                >
                  <FaGoogle /> Login with Google
                </Button>
              </div>
            </form>
          </Form>
          <div className="text-xs justify-center mt-6 flex flex-wrap gap-1">
            <p className="text-muted-foreground">Don't have an account?</p>
            <Link
              className="text-primary hover:underline"
              href={"/auth/signup"}
            >
              Register here.
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
