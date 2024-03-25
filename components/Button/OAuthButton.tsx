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
      className="flex flex-grow cursor-pointer items-center justify-center gap-2 rounded-md  border border-green-300 px-3 py-1.5 text-lg transition-all duration-300 hover:bg-green-200"
      onClick={() => signIn(provider)}
    >
      <span className="text-2xl text-blue-500">{icon}</span>
      <span className="">{text}</span>
    </div>
  );
}
