"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Search, SendHorizontal } from "lucide-react";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FaSquarePlus } from "react-icons/fa6";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { postComment } from "@/lib/network-data/comment";

const FormSchema = z.object({
  content: z.string(),
});

type FormFields = z.infer<typeof FormSchema>;

export default function CommentInput({ forumId }: { forumId: string }) {
  const { data } = useSession();
  const router = useRouter();
  const form = useForm<FormFields>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      content: "",
    },
  });

  async function onSubmit(values: FormFields) {
    try {
      if (data) {
        await postComment({
          content: values.content,
          userId: data?.user.id,
          forumId: Number(forumId),
          token: data.user.token!,
        });
      }
      toast.success("Komentar berhasil ditambahkan!", {
        description: "Silahkan berdiskusi dengan sopan",
      });
      return router.refresh();
    } catch (error) {
      console.log(error);
      toast.error("Gagal menambahkan komentar!", {
        description: "Sepertinya terdapat kesalahan",
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="relative flex items-center">
          <FaSquarePlus className="absolute left-3 text-xl text-slate-500 lg:left-5 lg:text-2xl" />
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    placeholder="Tambahkan Komentar..."
                    className="h-10 pl-10  md:w-full lg:h-14 lg:pl-16 lg:text-xl"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button
            size={"icon"}
            className="absolute right-2 bg-transparent hover:bg-transparent"
            type="submit"
          >
            <SendHorizontal
              className="text-xl text-slate-500 lg:text-[28px]"
              strokeWidth={1.25}
            />
          </Button>
        </div>
      </form>
    </Form>
  );
}
