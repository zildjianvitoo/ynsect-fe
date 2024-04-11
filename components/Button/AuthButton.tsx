"use client";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

const AuthButton = () => {
  const { data, status } = useSession();

  return (
    <div className="flex gap-2">
      {status === "unauthenticated" ? (
        <Link href="/login" className="cursor-pointer bg-slate-200">
          Login
        </Link>
      ) : (
        <>
          <Link href="/create">Create Data</Link>
          <div
            onClick={() => signOut()}
            className="cursor-pointer bg-slate-200"
          >
            Logout
          </div>
        </>
      )}
    </div>
  );
};

export default AuthButton;
