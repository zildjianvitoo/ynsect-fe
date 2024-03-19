import Image from "next/image";
import BackButton from "@/components/Button/BackButton";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import Header from "@/components/Header";
import OAuthButton from "@/components/Button/OAuthButton";
import RegisterForm from "@/components/Register/RegisterForm";

const RegisterPage = () => {
  return (
    <section className="w-full flex">
      <section id="register" className="w-1/2 py-12 px-40">
        <BackButton
          route="/"
          icon={<IoChevronBackCircleOutline />}
          text="Back"
        />
        <Header
          head="SignUp"
          desc="Yuk buat akun dan nikmati berbagai fitur menarik dari kami!"
        />
        <div className="mt-4">
          <RegisterForm />
        </div>
        <div className="mt-4 text-center text-lg">Or Sign In With</div>
        <div className="flex mt-4 gap-4">
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

export default RegisterPage;
