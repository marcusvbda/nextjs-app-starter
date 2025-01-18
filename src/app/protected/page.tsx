"use client";
import { SessionProviderContext } from "@/context/session.context";
import Link from "next/link";
import { useContext } from "react";
import { fetchExample, fetchTotalExample } from "./actions";
import { InfiniteScroll } from "@/components/InfiniteScroll.component";

export default function ProtectedPage() {
  const { session } = useContext(SessionProviderContext);

  return (
    <div className="flex flex-col">
      <div className="navbar bg-base-100 border-b border-gray-50/10">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Starter</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <details>
                <summary>{session.user.name}</summary>
                <ul className="bg-base-100 rounded-t-none p-2">
                  <li>
                    <Link href="/auth/signout">Sair</Link>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
      <InfiniteScroll
        fetchRows={fetchExample}
        fetchTotal={fetchTotalExample}
        perPage={3}
        renderRow={(index: number, row: any): any => {
          return <h1 key={index}>{row.id}</h1>;
        }}
      />
    </div>
  );
}
