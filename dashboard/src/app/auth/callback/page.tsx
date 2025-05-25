"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AuthCallbackPage() {
  const router = useRouter();
  const backendBaseUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

  useEffect(() => {
    
    fetch(`${backendBaseUrl}/auth/token`, {
      credentials: "include", 
    })
      .then(res => res.json())
      .then(({ token }) => {
        if (token) {
          localStorage.setItem("token", token);
          router.replace("/");
        } else {
          alert("Login failed: token missing");
          router.replace("/login");
        }
      })
      .catch(() => {
        alert("Login failed");
        router.replace("/login");
      });
  }, [router]);

  return <div>Logging you in...</div>;
}
