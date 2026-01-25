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
import { BackendIP, cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { createClient } from "@supabase/supabase-js";
import { Eye, EyeClosed, Mail, MailCheck, User } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
import { toast } from "sonner";
import { z } from "zod";
import { Form, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";

export const SignupForm = ({
  className,
  ...props
}: React.ComponentProps<"div">) => {
  const [showPass, setShowPass] = useState(false);
  const [isVerification, setIsVerification] = useState(false);

  const formSchema = z.object({
    username: z.string().min(1, "Username is required!"),
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
      username: "",
      email: "",
      password: "",
    },
  });

  const googleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `http://localhost:3000/auth/callback`,
      },
    });

    if (error) console.error(error.message);
  };

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    const supabasee = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );

    const validation = formSchema.safeParse(values);
    if (!validation.success) {
      toast.error(`Error: ${validation.error.message}`);
      return;
    }

    const upload = await fetch(`${BackendIP}/api/auth/signup`, {
      method: "POST",
      body: JSON.stringify({
        email: values.email,
        username: values.username,
      }),
    });
    const data = await upload.json();
    if (upload.status !== 200) {
      toast.error(`Error: ${data.message}`);
      return;
    }

    setIsVerification(true);
  };

  return (
    <div>
      {isVerification ? (
        <VerificationCard />
      ) : (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
          <Card>
            <CardHeader>
              <CardTitle className="flex justify-center text-xl mb-1">
                Register
              </CardTitle>
              <CardDescription className="text-center">
                Register your account to use various features of granime.
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
                    name="username"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Username</FormLabel>
                        <div className="relative">
                          <Input placeholder="uchiha_sasuke" {...field} />
                          <User className="w-5 h-5 absolute top-1.5 right-3.5 text-muted-foreground" />
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <div className="relative">
                          <Input placeholder="sasuke@example.com" {...field} />
                          <Mail className="w-5 h-5 absolute top-1.5 right-3.5 text-muted-foreground" />
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
                            {...field}
                          />
                          <button
                            type="button"
                            className="cursor-pointer"
                            onClick={() => setShowPass(!showPass)}
                          >
                            {showPass ? (
                              <EyeClosed className="w-5 h-5 absolute top-1/5 right-3.5 text-muted-foreground" />
                            ) : (
                              <Eye className="w-5 h-5 absolute top-1.5 right-3.5 text-muted-foreground" />
                            )}
                          </button>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="flex flex-col items-center justify-center gap-4">
                    <Button type="submit" className="w-full">
                      Daftar
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
                      <FaGoogle /> Register with Google
                    </Button>
                  </div>
                </form>
              </Form>
              <div className="text-xs flex justify-center mt-6 flex-wrap gap-1">
                <p className="text-muted-foreground">
                  Already have an account?
                </p>
                <Link
                  className="text-primary hover:underline"
                  href={"/auth/login"}
                >
                  Login here.
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

const VerificationCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex justify-center text-xl mb-1">
          Verification Email
        </CardTitle>
        <CardDescription className="text-center">
          Check your inbox email for verification email
        </CardDescription>
        <CardContent className="flex flex-col mt-4 gap-4 items-center justify-center">
          <span className="text-primary">
            <MailCheck className="w-16 h-16" />
          </span>
        </CardContent>
      </CardHeader>
    </Card>
  );
};
