"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { IoMailOutline } from "react-icons/io5";
import { PiLockKeyThin } from "react-icons/pi";
import Input from "../Input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

type FormFields = z.infer<typeof schema>;

export default function LoginForm() {
  const router = useRouter();
  const { status } = useSession();
  if (status === "authenticated") {
    router.push("/");
  }

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({ resolver: zodResolver(schema) });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    const login = await signIn("credentials", { ...data, redirect: false });
    if (!login?.ok) {
      console.log("Something Went Wrong");
    } else {
      router.push("/");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="">
        <Input
          label="Email"
          icon={<IoMailOutline />}
          type="email"
          placeholder="ex: johndoe@gmail.com"
          register={register}
          name="email"
          errors={errors}
        />
      </div>
      <div className="mt-5">
        <Input
          label="Password"
          icon={<PiLockKeyThin />}
          type="password"
          placeholder="Insert your password"
          register={register}
          name="password"
          errors={errors}
        />
      </div>
      <div className="mt-2 flex gap-2 items-center">
        <input
          type="checkbox"
          id="remember"
          className="text-green-600 bg-gray-100 border-gray-300 rounded-xl focus:ring-green-500 w-5 h-5"
        />
        <label className="text-lg" htmlFor="remember">
          Remember Me
        </label>
      </div>
      <div className="mt-4">
        <button
          disabled={isSubmitting}
          type="submit"
          className={`w-full  text-white py-2 rounded-lg text-lg ${
            isSubmitting ? "bg-green-300" : "bg-primary"
          }`}
        >
          {isSubmitting ? "Submitting..." : "Signup"}
        </button>
      </div>
    </form>
  );
}
