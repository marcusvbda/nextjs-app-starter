"use client";
import { SessionProviderContext } from "@/context/session.context";
import Link from "next/link";
import { useContext } from "react";

export default function ProtectedPage() {
  const { session } = useContext(SessionProviderContext);

  return (
    <div className="flex flex-col gap-1">
      Logado
      <Link href="/auth/signout">Logout</Link>
      {/* <img src={user?.picture} alt={user?.name} /> */}
    </div>
  );
}
