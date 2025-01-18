import Link from "next/link";

export default async function HomePage() {
  return (
    <div className="navbar bg-base-100 border-b border-gray-50/10">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Starter</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/auth/signin">Login</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
