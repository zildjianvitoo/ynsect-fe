"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

type Props = {
  provider: string;
  icon: React.ReactNode;
  text: string;
};

export default function OAuthButton({ provider, icon, text }: Props) {
  const router = useRouter();
  async function handleSignIn() {
    try {
      await signIn(provider);
      router.push("/dashboard");
      toast.success("Selamat datang!", {
        description: "Semoga kamu mendapatkan pengalaman yang menyenangkan!",
        duration: 10000,
      });
    } catch (error) {
      console.log(error);
      toast.error("Terjadi kesalahan saat login", {
        description: "Coba gunakan akun yang lain!",
        duration: 3000,
      });
    }
  }
  return (
    <div
      className="flex flex-grow cursor-pointer items-center justify-center gap-2 rounded-md  border border-green-300 px-3 py-1.5 text-lg transition-all duration-300 hover:bg-green-200"
      onClick={handleSignIn}
    >
      <span className="text-2xl text-blue-500">{icon}</span>
      <span className="">{text}</span>
    </div>
  );
}
