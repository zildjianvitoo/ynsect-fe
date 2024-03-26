"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const FormSchema = z.object({
  name: z.string().min(2, {
    message: "Nama minimal 2 huruf",
  }),
  email: z.string().min(2, {
    message: "Email minimal 3 huruf",
  }),
  phone: z.string().min(10, {
    message: "No Telepon minimal 10 Karakter",
  }),
  address: z.string().min(2, {
    message: "Alamat minimal 3 huruf",
  }),
  waste: z.string().min(1, {
    message: "Berat limbah tidak boleh kosong",
  }),
});

type FormField = z.infer<typeof FormSchema>;

export default function FormSetorSampah() {
  const form = useForm<FormField>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      waste: "",
      address: "",
    },
  });

  const onSubmit = (data: FormField) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-6"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel className="text-xl font-bold lg:text-2xl">
                Nama Lengkap
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="ex: Zildjian Vito"
                  className="py-5 text-lg"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel className="text-xl font-bold lg:text-2xl">
                Email
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="ex: zildjianvito.s@gmail.com"
                  className="py-5 text-lg"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel className="text-xl font-bold lg:text-2xl">
                No Telepon
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="08xxxxxxxxxx"
                  className="py-5 text-lg"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel className="text-xl font-bold lg:text-2xl">
                Alamat
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Masukkan alamat penjemputan"
                  className=" text-lg"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="waste"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel className="text-xl font-bold lg:text-2xl">
                Berat Limbah
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Masukkan perkiraan berat limbah"
                  className="py-5 text-lg"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-fit">
          Setor Sampah
        </Button>
      </form>
    </Form>
  );
}
