import Image from "next/image";
import BackButton from "@/components/Button/BackButton";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import Header from "@/components/Header";
import OAuthButton from "@/components/Button/OAuthButton";
import LoginForm from "@/components/Auth/Login/LoginForm";

const LoginPage = () => {
  return (
    <section className="flex h-screen w-full">
      <section id="login" className="w-1/2 px-40 py-20">
        <BackButton
          route="/"
          icon={<IoChevronBackCircleOutline />}
          text="Back"
        />
        <Header
          head="Login"
          desc="Yuk segera masuk ke akunmu dan mulai budidaya bersama ynsect"
        />
        <div className="mt-4">
          <LoginForm />
        </div>
        <div className="mt-4 text-center text-lg">Or Sign In With</div>
        <div className="mt-4 flex gap-4">
          <OAuthButton provider="google" icon={<FcGoogle />} text="Google" />
          <OAuthButton
            provider="facebook"
            icon={<FaFacebook />}
            text="Facebook"
          />
        </div>
      </section>
      <section id="img-container" className="relative  w-1/2">
        <Image
          src={"/images/insects-login.png"}
          alt="insects"
          fill
          className="object-cover"
        />
      </section>
    </section>
  );
};

export default LoginPage;
