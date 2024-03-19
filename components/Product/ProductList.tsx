"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FormControl, FormField, FormItem, Form } from "../ui/form";
import { Input } from "../ui/input";
import { Search } from "lucide-react";
import { Button } from "../ui/button";
import ProductCard from "./ProductCard";

const dummyData = [
  {
    image: "/images/logo.png",
    title: "Larva BSF Kering",
    description:
      "Sumber protein yang sempurna untuk ternak dan hewan peliharaan Anda.",
  },
  {
    image: "/images/logo.png",
    title: "Larva BSF Kering",
    description:
      "Sumber protein yang sempurna untuk ternak dan hewan peliharaan Anda.",
  },
  {
    image: "/images/logo.png",
    title: "Larva BSF Kering",
    description:
      "Sumber protein yang sempurna untuk ternak dan hewan peliharaan Anda.",
  },
  {
    image: "/images/logo.png",
    title: "Larva BSF Kering",
    description:
      "Sumber protein yang sempurna untuk ternak dan hewan peliharaan Anda.",
  },
  {
    image: "/images/logo.png",
    title: "Larva BSF Kering",
    description:
      "Sumber protein yang sempurna untuk ternak dan hewan peliharaan Anda.",
  },
  {
    image: "/images/logo.png",
    title: "Larva BSF Kering",
    description:
      "Sumber protein yang sempurna untuk ternak dan hewan peliharaan Anda.",
  },
];

const FormSchema = z.object({
  searchValue: z.string().min(2, {
    message: "Minimal 2 karakter",
  }),
});

type FormFields = z.infer<typeof FormSchema>;

export default function ProductList() {
  const form = useForm<FormFields>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      searchValue: "",
    },
  });

  function onSubmit(fields: FormFields) {
    console.log(fields);
  }

  return (
    <div className="flex flex-col gap-6 ">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className=" flex flex-col gap-2">
          <p className=" text-slate-500">The Best of The Best</p>
          <h1 className="text-4xl font-bold lg:text-5xl">Our Product</h1>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className=" relative flex items-center ">
              <FormField
                control={form.control}
                name="searchValue"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input
                        placeholder="Cari Produk"
                        className="h-11  md:w-[250px]"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button
                size={"icon"}
                className="absolute right-2 bg-transparent hover:bg-transparent"
              >
                <Search className=" text-slate-500 " size={20} />
              </Button>
            </div>
          </form>
        </Form>
      </div>
      <div className="grid grid-cols-1  gap-6 md:grid-cols-2 lg:grid-cols-3">
        {dummyData.map((item, index) => (
          <ProductCard
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}
