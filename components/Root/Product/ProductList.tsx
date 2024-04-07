"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Search } from "lucide-react";
import ProductCard from "./ProductCard";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Product } from "@/types/product";
import { useState } from "react";

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
  searchValue: z.string().optional(),
});

type Props = {
  products: Product[];
};

type FormFields = z.infer<typeof FormSchema>;

export default function ProductList({ products }: Props) {
  const [productList, setProductList] = useState(products);

  const form = useForm<FormFields>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      searchValue: "",
    },
  });

  function onSubmit(fields: FormFields) {
    if (!fields.searchValue) {
      setProductList(products);
      return;
    }

    const newProductList = productList.filter((product) =>
      product.name.toLowerCase().includes(fields.searchValue!.toLowerCase()),
    );
    setProductList(newProductList);
  }

  return (
    <div className="flex flex-col gap-6 ">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className=" flex flex-col gap-2">
          <p className="text-lg text-slate-500 lg:text-xl">
            The Best of The Best
          </p>
          <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
            Our Product
          </h1>
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
                        className="h-11 md:w-[250px]"
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
      <div className="mt-3 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {productList.length === 0 ? (
          <p className="mx-auto text-center text-2xl font-semibold lg:col-span-3">
            Tidak ada produk
          </p>
        ) : (
          productList.map((item, index) => (
            <ProductCard
              key={index}
              image={"/images/logo.png"}
              title={item.name}
              description={item.description}
            />
          ))
        )}
      </div>
    </div>
  );
}
