"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { useEffect, useState } from "react";
import Image from "next/image";
import CountButton from "@/components/Button/CountButton";
import { useSession } from "next-auth/react";
import { deleteCartByUserId, getCartByUserId } from "@/lib/network-data/cart";
import { ProductCart } from "@/types/cart";
import { useCartStore } from "@/store/CartStore";
import { toast } from "sonner";

type FormFields = z.infer<typeof FormSchema>;

const FormSchema = z.object({
  all: z.boolean().default(false).optional(),
  items: z.array(z.number()),
});

type Props = {};

export default function CartProductList({}: Props) {
  const [items, setItems] = useState<ProductCart[] | []>([]);

  const [setSubtotal] = useCartStore((state) => [state.setSubtotal]);

  const { data: userData } = useSession();

  const form = useForm<FormFields>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      items: [],
    },
  });

  useEffect(() => {
    const getUserCart = async () => {
      try {
        const { data } = await getCartByUserId({ userId: userData?.user.id! });
        setItems(data.products);
        setSubtotal(data.total_price);
      } catch (error) {
        console.log(error);
      }
    };
    getUserCart();
  }, [userData?.user.id]);

  const deleteCart = async () => {
    try {
      const { data } = await deleteCartByUserId({
        userId: userData?.user.id!,
      });
      console.log(data);
      toast.success("Berhasil menghapus keranjang");
      window.location.reload();
    } catch (error) {
      console.log(error);
      toast.error("Terjadi kesalahan saat menghapus keranjang");
    }
  };
  const handleAllCheckboxChange = () => {
    const currentValueAll = form.getValues("all") || false;
    const allArrayValue: number[] = [];

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

  const handleSingleCheckboxChange = (checkedValue: number) => {
    const currentValue = form.getValues("items") || [];
    if (currentValue.includes(checkedValue)) {
      form.setValue(
        "items",
        currentValue.filter((value: number) => value !== checkedValue),
      );
      form.setValue("all", false);
    } else {
      form.setValue("items", [...currentValue, checkedValue]);
    }
  };

  return (
    <div className=" ">
      <Form {...form}>
        <form>
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
                  <h4
                    onClick={deleteCart}
                    className="cursor-pointer   text-lg text-slate-500 lg:text-xl"
                  >
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
                          {/* {Add Image} */}
                          <Image src={item.image} alt={item.name} fill />
                        </figure>
                        <div className="flex flex-col">
                          <h3 className=" hidden text-xl font-bold md:block lg:text-2xl">
                            {item.name}
                          </h3>
                          <p className="mt-2 text-slate-500">
                            Sisa stok: 32 kg
                          </p>
                          <div className=" mt-4 items-stretch  ">
                            <p className="text-slate-500">Subtotal:</p>
                            <h3 className=" text-xl font-bold lg:text-2xl">
                              IDR {item.price.toLocaleString("id-ID")}
                            </h3>
                          </div>
                        </div>
                      </div>
                      {/* <div className="ml-auto ">
                        <CountButton intialCount={0} cartPage />
                      </div> */}
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
