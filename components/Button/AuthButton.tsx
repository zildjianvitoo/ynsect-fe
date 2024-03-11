"use client";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

const AuthButton = () => {
  const { data, status } = useSession();

  console.log(data);

  return (
    <div className="flex gap-2">
      {status === "unauthenticated" ? (
        <Link href="/login" className="bg-slate-200 cursor-pointer">
          Login
        </Link>
      ) : (
        <>
          <Link href="/create">Create Data</Link>
          <div
            onClick={() => signOut()}
            className="bg-slate-200 cursor-pointer"
          >
            Logout
          </div>
        </>
      )}
    </div>
  );
};

export default AuthButton;
