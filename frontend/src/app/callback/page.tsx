'use client';

import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function CallbackPage() {
  const { isLoading, getAccessTokenSilently, user } = useAuth0();
  const router = useRouter()
  useEffect(() => {
    const sendToken = async () => {
      const token = await getAccessTokenSilently();
      console.log("ACCESS TOKEN:", token);
      await fetch("http://localhost:5000/auth/callback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token, email: user?.email }),
      });
    };

    if (!isLoading) {
      sendToken();
      router.push("/");
    }
  }, [isLoading]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p>Redirecting...</p>
    </div>
  );
}
