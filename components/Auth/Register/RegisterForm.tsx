"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { IoMailOutline } from "react-icons/io5";
import { PiLockKeyThin } from "react-icons/pi";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { AiOutlineUser } from "react-icons/ai";
import Input from "@/components/Input";

const schema = z
  .object({
    name: z.string().min(5),
    email: z.string().email(),
    password: z.string().min(8),
    confirmPassword: z.string().min(8),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

type FormFields = z.infer<typeof schema>;

export default function RegisterForm() {
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
    const response = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data }),
    });

    if (!response.ok) {
      console.log("Something Went Wrong");
    } else {
      router.push("/login");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="">
        <Input
          label="Name"
          icon={<AiOutlineUser />}
          type="text"
          placeholder="ex: John Doe"
          register={register}
          name="name"
          errors={errors}
        />
      </div>
      <div className="mt-5">
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
      <div className="mt-5">
        <Input
          label="Confirm Password"
          icon={<PiLockKeyThin />}
          type="password"
          placeholder="Confirm your password"
          register={register}
          name="confirmPassword"
          errors={errors}
        />
      </div>
      <div className="mt-2 flex items-center gap-2">
        <input
          type="checkbox"
          id="remember"
          className="h-5 w-5 rounded-xl border-gray-300 bg-gray-100 text-green-600 focus:ring-green-500"
        />
        <label className="text-lg" htmlFor="remember">
          Remember Me
        </label>
      </div>
      <div className="mt-4">
        <button
          disabled={isSubmitting}
          type="submit"
          className={`w-full  rounded-lg py-2 text-lg text-white ${
            isSubmitting ? "bg-green-300" : "bg-primary"
          }`}
        >
          {isSubmitting ? "Submitting..." : "Sign In"}
        </button>
      </div>
    </form>
  );
}
