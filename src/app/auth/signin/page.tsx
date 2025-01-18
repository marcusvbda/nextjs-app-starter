"use client";

import { signIn } from "next-auth/react";
import { use, useEffect } from "react";

export default function Login({ searchParams }: any) {
  const params: any = use(searchParams);
  const callbackUrl = params?.callbackUrl || "/protected";

  useEffect(() => {
    signIn("auth0", { callbackUrl: callbackUrl || "/protected" });
  }, []);

  return (
    <div className="w-full flex items-center justify-center py-20">
      <div className="spinner my-10" />
    </div>
  );
}
