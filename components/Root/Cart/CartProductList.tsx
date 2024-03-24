"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { array, z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { useEffect, useState } from "react";
import Image from "next/image";
import CountButton from "@/components/Button/CountButton";
const items = [
  {
    id: "larva-bsf-kering",
    label: "Larva-Bsf-Kering",
    stock: 300,
    price: 32000,
    amount: 1,
  },
  {
    id: "bsf-larva-hidup",
    label: "BSF Larva Hidup",
    stock: 300,
    price: 32000,
    amount: 1,
  },
  {
    id: "minyak-bsf-larva",
    label: "Minyak BSF Larva",
    stock: 300,
    price: 32000,
    amount: 1,
  },
] as const;

type FormFields = z.infer<typeof FormSchema>;

const FormSchema = z.object({
  all: z.boolean().default(false).optional(),
  items: z.array(z.string()),
});

type Props = {};

export default function CartProductList({}: Props) {
  const form = useForm<FormFields>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      items: ["recents", "home"],
    },
  });

  useEffect(() => {
    //
    if (items.every((item) => ["recents", "home"].includes(item.id))) {
      console.log("benar");
    } else {
      console.log("salah");
    }
  }, []);

  function onSubmit(fields: FormFields) {
    console.log(fields);
  }

  const handleAllCheckboxChange = () => {
    const currentValueAll = form.getValues("all") || false;
    const allArrayValue: string[] = [];

    if (!currentValueAll) {
      items.map((item) => allArrayValue.push(item.id));
      console.log(allArrayValue);
      form.setValue("items", allArrayValue);
      form.setValue("all", true);
    } else if (currentValueAll) {
      console.log(allArrayValue);
      form.setValue("all", false);
      form.setValue("items", []);
    }
  };

  const handleSingleCheckboxChange = (checkedValue: string) => {
    const currentValue = form.getValues("items") || [];
    if (currentValue.includes(checkedValue)) {
      form.setValue(
        "items",
        currentValue.filter((value: string) => value !== checkedValue),
      );
      form.setValue("all", false);
    } else {
      form.setValue("items", [...currentValue, checkedValue]);
    }
  };

  return (
    <div className=" ">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="">
            <FormField
              control={form.control}
              name="items"
              render={({ field }) => (
                <FormItem className="flex items-center justify-between rounded-md  border border-slate-400 px-6 py-4">
                  <div className="mt-1 flex flex-row items-center gap-4 ">
                    <FormControl>
                      <Checkbox
                        className="border-slate-400"
                        checked={items.every((item) =>
                          field.value.includes(item.id),
                        )}
                        onCheckedChange={() => handleAllCheckboxChange()}
                      />
                    </FormControl>
                    <FormLabel className="">
                      {" "}
                      <h3 className=" text-xl font-bold  lg:text-2xl">
                        Pilih semua
                      </h3>
                    </FormLabel>
                  </div>
                  <h4 className="cursor-pointer   text-lg text-slate-500 lg:text-xl">
                    Hapus semua
                  </h4>
                </FormItem>
              )}
            />
          </div>
          <div className="mt-6 flex flex-col gap-6">
            {items.map((item, index) => (
              <FormField
                key={item.id}
                control={form.control}
                name="items"
                render={({ field }) => (
                  <FormItem className="flex items-center  rounded-md  border border-slate-300 px-6 py-4">
                    <div className="flex w-full flex-row items-start gap-6 ">
                      <FormControl>
                        <Checkbox
                          className="border-slate-400"
                          checked={field.value?.includes(item.id)}
                          onCheckedChange={() =>
                            handleSingleCheckboxChange(item.id)
                          }
                        />
                      </FormControl>
                      <div className="flex flex-col gap-4 md:flex-row">
                        <figure className="relative size-32">
                          <Image
                            src={"/images/logo.png"}
                            alt={item.label}
                            fill
                          />
                        </figure>
                        <div className="flex flex-col">
                          <h3 className=" hidden text-xl font-bold md:block lg:text-2xl">
                            Atur jumlah dan catatan
                          </h3>
                          <p className="mt-2 text-slate-500">
                            Sisa stok: {item.stock} kg
                          </p>
                          <div className=" mt-4 items-stretch  ">
                            <p className="text-slate-500">Subtotal:</p>
                            <h3 className=" text-xl font-bold lg:text-2xl">
                              IDR 32,000
                            </h3>
                          </div>
                        </div>
                      </div>
                      <div className="ml-auto ">
                        <CountButton intialCount={item.amount} cartPage />
                      </div>
                    </div>
                  </FormItem>
                )}
              />
            ))}
          </div>
        </form>
      </Form>
    </div>
  );
}
