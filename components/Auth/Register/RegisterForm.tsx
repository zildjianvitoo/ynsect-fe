"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { signIn, useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import { IoMailOutline } from "react-icons/io5";
import { PiLockKeyThin } from "react-icons/pi";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineUser,
} from "react-icons/ai";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { registerUser } from "@/lib/network-data/auth";
import { toast } from "sonner";

const formSchema = z
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

export default function RegisterForm() {
  const [isShow, setIsShow] = useState(false);
  const [isShowRepeat, setIsShowRepeat] = useState(false);
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await registerUser(values);
      toast.success("Register akun berhasil", {
        description: "Silahkan login!",
        duration: 3000,
      });
      return router.push("/login");
    } catch (error) {
      console.log(error);
      toast.error("Terjadi kesalahan pada pengisian data", {
        description: "Silahkan isi data dengan benar!",
        duration: 3000,
      });
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-5"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg font-bold text-primary">
                Name
              </FormLabel>
              <FormControl>
                <div className="relative">
                  <div className="absolute left-3 top-2 text-2xl text-primary">
                    <AiOutlineUser />
                  </div>
                  <Input
                    className="w-full rounded-lg  border bg-transparent px-12 py-2 text-base placeholder:text-base focus:outline-primary focus:ring-primary"
                    placeholder="ex: John Doe"
                    {...field}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg font-bold text-primary">
                Email
              </FormLabel>
              <FormControl>
                <div className="relative">
                  <div className="absolute left-3 top-2 text-2xl text-primary">
                    <IoMailOutline />
                  </div>
                  <Input
                    className="w-full rounded-lg  border bg-transparent px-12 py-2 text-base placeholder:text-base focus:outline-primary focus:ring-primary"
                    placeholder="ex: johndoe@gmail.com"
                    {...field}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg font-bold text-primary">
                Password
              </FormLabel>
              <FormControl>
                <div className="relative">
                  <div className="absolute left-3 top-2 text-2xl text-primary">
                    <PiLockKeyThin />
                  </div>
                  <Input
                    type={isShow ? "text" : "password"}
                    className="w-full rounded-lg  border bg-transparent px-12 py-2 text-base placeholder:text-base focus:outline-primary focus:ring-primary"
                    placeholder="ex: johndoe@gmail.com"
                    {...field}
                  />
                  <div
                    onClick={() => setIsShow(!isShow)}
                    className="absolute right-3 top-2 bg-transparent text-2xl text-primary"
                  >
                    {isShow ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                  </div>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg font-bold text-primary">
                Confirm Password
              </FormLabel>
              <FormControl>
                <div className="relative">
                  <div className="absolute left-3 top-2 text-2xl text-primary">
                    <PiLockKeyThin />
                  </div>
                  <Input
                    type={isShowRepeat ? "text" : "password"}
                    className="w-full rounded-lg  border bg-transparent px-12 py-2 text-base placeholder:text-base focus:outline-primary focus:ring-primary"
                    placeholder="confirm your password"
                    {...field}
                  />
                  <div
                    onClick={() => setIsShowRepeat(!isShowRepeat)}
                    className="absolute right-3 top-2 bg-transparent text-2xl text-primary"
                  >
                    {isShowRepeat ? (
                      <AiOutlineEyeInvisible />
                    ) : (
                      <AiOutlineEye />
                    )}
                  </div>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="remember"
            className="h-5 w-5 rounded-xl border-gray-300 bg-gray-100 text-green-600 focus:ring-green-500"
          />
          <label className="text-lg" htmlFor="remember">
            Remember Me
          </label>
        </div>
        <button
          disabled={form.formState.isSubmitting}
          type="submit"
          className={`w-full  rounded-lg py-2 text-lg text-white ${
            form.formState.isSubmitting ? "bg-green-300" : "bg-primary"
          }`}
        >
          {form.formState.isSubmitting ? "Submitting..." : "Register"}
        </button>
      </form>
    </Form>
  );
}
