"use client";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { ReactNode, createContext } from "react";

export const SessionProviderContext = createContext<any>({});

export const SessionProviderProvider = ({
  children,
  session,
}: {
  children: ReactNode;
  session: Session | null;
}): ReactNode => {
  return (
    <SessionProviderContext.Provider
      value={{
        session,
      }}
    >
      <SessionProvider session={session}>{children}</SessionProvider>
    </SessionProviderContext.Provider>
  );
};
