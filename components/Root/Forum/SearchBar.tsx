"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Search } from "lucide-react";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForumStore } from "@/store/ForumStore";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

const FormSchema = z.object({
  searchValue: z.string().optional(),
});

type FormFields = z.infer<typeof FormSchema>;

export default function SearchBar() {
  const searchParams = useSearchParams();

  const router = useRouter();

  const { searchForum, setSearchValue } = useForumStore();
  const form = useForm<FormFields>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      searchValue: "",
    },
  });

  function onSubmit(value: FormFields) {
    const params = new URLSearchParams(searchParams);
    if (!value.searchValue || value.searchValue.length === 0) {
      params.delete("q");
    }
    if (value.searchValue) {
      setSearchValue(value.searchValue);

      params.set("q", value.searchValue);

      const queryString = params.toString();
      const updatedPath = queryString ? `/forum?${queryString}` : "/forum";
      router.push(updatedPath);
    }
  }

  return (
    <div className="flex grow lg:grow-0">
      <Form {...form}>
        <form className="w-full" onSubmit={form.handleSubmit(onSubmit)}>
          <div className="relative flex w-full items-center ">
            <FormField
              control={form.control}
              name="searchValue"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      placeholder="Cari forum"
                      className="h-10  min-w-32 px-4 lg:h-14 lg:w-80 lg:text-xl"
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
              <Search className="text-slate-500" size={28} strokeWidth={1.5} />
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
