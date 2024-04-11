"use client";

import { useSession } from "next-auth/react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { PencilLine, Phone, User } from "lucide-react";
import Image from "next/image";
import { IoMailOutline } from "react-icons/io5";

const formSchema = z.object({
  email: z.string().email({
    message: "Enter a valid email",
  }),
  name: z.string(),
  phone: z.string().min(10).max(13),
  alamat: z.string(),
});

export default function Pengaturan() {
  const { data } = useSession();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    values: {
      email: data?.user.email!,
      name: data?.user.name!,
      phone: data?.user.phone || "",
      alamat: data?.user.address || "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const { email, name, phone, alamat } = values;
  }

  const getName = data?.user?.name || "";

  const splitUsername = getName.split(" ");

  const alternativeImage = splitUsername
    .slice(0, 2)
    .map((word: string) => word.charAt(0).toUpperCase())
    .join("");

  return (
    <section id="ask-the-pro" className="flex flex-col gap-6 p-6">
      <section id="ask-the-pro" className="flex flex-col gap-6 p-6">
        <div className="flex w-full justify-between gap-4 rounded-lg border p-4">
          <div className="flex gap-6">
            <div className="relative aspect-square w-40 overflow-hidden rounded-lg">
              {data?.user.image ? (
                <Image
                  src={data?.user.image}
                  alt="User-1 profile picture"
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="flex size-full items-center justify-center gap-1 rounded-2xl border-[3px] border-primary bg-secondary text-7xl font-bold text-primary">
                  {alternativeImage}
                </div>
              )}
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-3xl font-bold">{data?.user?.name}</h1>
              <div className="flex flex-col">
                <h2 className="text-lg">Bergabung Sejak 11 April 2024</h2>
              </div>
            </div>
          </div>
          <div className="flex size-10 items-center justify-center rounded-lg bg-primary text-white">
            <PencilLine />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <Form {...form}>
            <form autoComplete="false" onSubmit={form.handleSubmit(onSubmit)}>
              <div className="">
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
              </div>
              <div className="mt-5">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg font-bold text-primary">
                        Nama
                      </FormLabel>
                      <FormControl>
                        <div className="relative">
                          <div className="absolute left-3 top-2 text-2xl text-primary">
                            <User />
                          </div>
                          <Input
                            className="w-full rounded-lg  border bg-transparent px-12 py-2 text-base placeholder:text-base focus:outline-primary focus:ring-primary"
                            placeholder="ex: Daffa Althaf"
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="mt-5">
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg font-bold text-primary">
                        Nomor Telepon
                      </FormLabel>
                      <FormControl>
                        <div className="relative">
                          <div className="absolute left-3 top-2 text-2xl text-primary">
                            <Phone />
                          </div>
                          <Input
                            className="w-full rounded-lg  border bg-transparent px-12 py-2 text-base placeholder:text-base focus:outline-primary focus:ring-primary"
                            placeholder="ex: 081234567890"
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="mt-5">
                <FormField
                  control={form.control}
                  name="alamat"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg font-bold text-primary">
                        Alamat
                      </FormLabel>
                      <FormControl>
                        <div className="relative">
                          <div className="absolute left-3 top-2 text-2xl text-primary">
                            <User />
                          </div>
                          <Input
                            className="w-full rounded-lg  border bg-transparent px-12 py-2 text-base placeholder:text-base focus:outline-primary focus:ring-primary"
                            placeholder="ex: Jl. Apapun, Palembang, Sumatera Selatan"
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="mt-8 px-8">
                <button
                  disabled={form.formState.isSubmitting}
                  type="submit"
                  className={`w-full rounded-lg py-2 text-lg text-white ${
                    form.formState.isSubmitting ? "bg-green-300" : "bg-primary"
                  }`}
                >
                  {form.formState.isSubmitting
                    ? "Submitting..."
                    : "Ubah profil kamu"}
                </button>
              </div>
            </form>
          </Form>
        </div>
      </section>
    </section>
  );
}
