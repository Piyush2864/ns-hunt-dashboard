"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Icons } from "../components/icon";
import { useRouter } from "next/navigation";

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"form">) {
  const router = useRouter();

  const backendBaseUrl = process.env.NEXT_PUBLIC_BACKEND_URL || "http://127.0.0.1:8787";

  const handleOAuthLogin = (provider: string) => {
    window.location.href = `${backendBaseUrl}/auth/${provider}`;
  };

  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Login to your account</h1>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" required />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
            <a
              href="#"
              className="ml-auto text-sm underline-offset-4 hover:underline"
            >
              Forgot your password?
            </a>
          </div>
          <Input id="password" type="password" required />
        </div>
        <Button type="submit" className="w-full">
          Login
        </Button>

        <div className="relative flex items-center justify-center">
          <div className="flex items-center">
            <div className="w-full border-t border-border" />
          </div>
          <span className="relative z-10 bg-background px-2 text-sm text-muted-foreground">
            Or continue with
          </span>
        </div>

        <Button
          variant="outline"
          className="w-full"
          type="button"
          onClick={() => handleOAuthLogin("google")}
        >
          <Icons.google className="mr-2 h-4 w-4" />
          Login with Google
        </Button>
        <Button
          variant="outline"
          className="w-full"
          type="button"
          onClick={() => handleOAuthLogin("github")}
        >
          <Icons.github className="mr-2 h-4 w-4" />
          Login with GitHub
        </Button>
        <Button
          variant="outline"
          className="w-full"
          type="button"
          onClick={() => handleOAuthLogin("discord")}
        >
          <Icons.discord className="mr-2 h-4 w-4" />
          Login with Discord
        </Button>
      </div>
      <div className="text-center text-sm">
        Don&apos;t have an account?{" "}
        <a href="#" className="underline underline-offset-4">
          Sign up
        </a>
      </div>
    </form>
  );
}
