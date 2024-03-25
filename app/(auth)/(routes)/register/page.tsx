import Image from "next/image";
import BackButton from "@/components/Button/BackButton";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import Header from "@/components/Header";
import OAuthButton from "@/components/Button/OAuthButton";
import RegisterForm from "@/components/Auth/Register/RegisterForm";

const RegisterPage = () => {
  return (
    <section className="relative h-[900px] w-full overflow-hidden lg:flex">
      <section
        id="register"
        className="h-full px-8 py-20 sm:px-32 lg:w-1/2 lg:px-8 xl:px-40"
      >
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
        <div className="mt-4 flex gap-4">
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
        className="absolute left-0 top-0 -z-10 h-[900px] w-full border lg:relative lg:block lg:w-1/2"
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

export default RegisterPage;
