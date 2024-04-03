"use client";

import Image from "next/image";
import BackButton from "@/components/Button/BackButton";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import Header from "@/components/Header";
import OAuthButton from "@/components/Button/OAuthButton";
import LoginForm from "@/components/Auth/Login/LoginForm";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const LoginPage = () => {
  const { status } = useSession();
  if (status === "authenticated") {
    return redirect("/dashboard");
  }
  return (
    <section className="relative h-screen w-full overflow-hidden lg:flex">
      <section
        id="login"
        className="px-8 py-20 sm:px-32 lg:w-1/2 lg:px-8 xl:px-40"
      >
        <BackButton
          route="/"
          icon={<IoChevronBackCircleOutline />}
          text="Back"
        />
        <Header
          head="Login"
          desc="Yuk segera masuk ke akunmu dan mulai budidaya bersama ynsect"
        />
        <div className="mt-2">
          <LoginForm />
        </div>
        <div className="mt-2 text-center text-lg">Or Sign In With</div>
        <div className="mt-2 flex gap-4">
          <OAuthButton provider="google" icon={<FcGoogle />} text="Google" />
          <OAuthButton
            provider="facebook"
            icon={<FaFacebook />}
            text="Facebook"
          />
        </div>
      </section>
      <section
        id="img-container"
        className="absolute left-0 top-0 -z-10 h-full w-full lg:relative lg:block lg:w-1/2"
      >
        <div className="absolute -z-20 h-full w-full bg-gray-200/70 lg:hidden" />
        <Image
          src={"/images/insects-login.png"}
          alt="insects"
          fill
          className="-z-30 object-cover"
        />
      </section>
    </section>
  );
};

export default LoginPage;
