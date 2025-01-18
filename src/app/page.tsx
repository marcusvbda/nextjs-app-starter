import Link from "next/link";

export default async function HomePage() {
  return (
    <div className="flex flex-col gap-1">
      <Link href="/protected">logado</Link>
      <Link href="/auth/signin">Login</Link>
    </div>
  );
}
