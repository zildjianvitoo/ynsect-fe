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

import Link from "next/link";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const { status } = useSession();
  const route = useRouter();

  if (status === "authenticated") {
    route.push("/dashboard");
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
        <div className="relative mt-4 h-6">
          <div className="absolute z-20 flex w-full justify-center">
            <div className="bg-white px-2 ">Or login in with</div>
          </div>

          <div className="absolute top-1/2 h-[0.5px] w-full bg-slate-500" />
        </div>
        <div className="mt-4 flex gap-4">
          <OAuthButton provider="google" icon={<FcGoogle />} text="Google" />
          <OAuthButton
            provider="facebook"
            icon={<FaFacebook />}
            text="Facebook"
          />
        </div>
        <div className="mt-4 text-center text-sm">
          <span>{"Don't have an account?"}</span>
          <span>
            <Link className="font-semibold text-primary" href="/register">
              {" "}
              Register Now!
            </Link>
          </span>
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
