"use client";

import { signIn } from "next-auth/react";

type Props = {
  provider: string;
  icon: React.ReactNode;
  text: string;
};

export default function OAuthButton({ provider, icon, text }: Props) {
  return (
    <div
      className="py-1.5 px-3 border border-secondary rounded-md cursor-pointer hover:bg-green-200  flex-grow flex gap-2 justify-center items-center text-lg"
      onClick={() => signIn(provider)}
    >
      <span className="text-2xl text-blue-500">{icon}</span>
      <span className="">{text}</span>
    </div>
  );
}
