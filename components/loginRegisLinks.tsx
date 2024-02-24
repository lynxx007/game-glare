"use client";
import { UserButton, useAuth } from "@clerk/nextjs";
import Link from "next/link";

export default function LoginRegisLinks() {
  const { isLoaded, userId } = useAuth();

  return (
    <>
      {isLoaded && userId ? (
        <div className="px-8">
          <UserButton showName afterSignOutUrl="/" />
        </div>
      ) : (
        <>
          <Link href="/auth/login">
            <p className="text-lg font-bold font-mono text-red-500">Login</p>
          </Link>
          <Link href="/auth/register">
            <p className="text-lg font-bold font-mono">Register</p>
          </Link>
        </>
      )}
    </>
  );
}
