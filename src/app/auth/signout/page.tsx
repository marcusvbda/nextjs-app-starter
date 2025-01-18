"use client";
import { useEffect } from "react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Signout() {
  const router = useRouter();
  useEffect(() => {
    const logout = async () => {
      await signOut({
        redirect: false,
      });

      router.push("/");
    };

    logout();
  }, []);

  return (
    <div className="w-full flex items-center justify-center py-20">
      <div className="spinner my-10" />
    </div>
  );
}
