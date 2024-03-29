"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Search } from "lucide-react";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const FormSchema = z.object({
  searchValue: z.string().min(2, {
    message: "Minimal 2 karakter",
  }),
});

type FormFields = z.infer<typeof FormSchema>;

export default function SearchBar() {
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
    <>
      <div className="flex size-10  items-center justify-center rounded-md bg-primary text-white lg:hidden">
        <Search size={24} strokeWidth={1.5} />
      </div>
      <div className="hidden lg:flex">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="relative flex items-center">
              <FormField
                control={form.control}
                name="searchValue"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input
                        placeholder="Cari forum"
                        className="h-14 px-4 text-xl md:w-80"
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
                <Search
                  className="text-slate-500"
                  size={28}
                  strokeWidth={1.5}
                />
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </>
  );
}
