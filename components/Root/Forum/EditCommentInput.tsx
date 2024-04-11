"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Pencil, Search, SendHorizontal } from "lucide-react";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FaSquarePlus } from "react-icons/fa6";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { postComment, updateComment } from "@/lib/network-data/comment";
import { BsPencil } from "react-icons/bs";

const FormSchema = z.object({
  content: z.string(),
});

type FormFields = z.infer<typeof FormSchema>;

type Props = {
  oldContent: string;
  commentId: number;
  handleEditing: () => void;
};

export default function EditCommentInput({
  oldContent,
  commentId,
  handleEditing,
}: Props) {
  const { data } = useSession();
  const router = useRouter();
  const form = useForm<FormFields>({
    resolver: zodResolver(FormSchema),
    values: {
      content: oldContent,
    },
  });

  async function onSubmit(values: FormFields) {
    try {
      await updateComment({
        content: values.content,
        id: commentId,
        token: data?.user.token,
      });
      handleEditing();
      toast.success("Komentar berhasil diubah!", {
        description: "Silahkan berdiskusi dengan ",
      });
      return router.refresh();
    } catch (error) {
      console.log(error);
      toast.error("Gagal mengubah komentar!", {
        description: "Sepertinya terdapat kesalahan",
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="relative flex items-center">
          <BsPencil className="absolute left-3 text-slate-500 lg:text-lg" />
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    placeholder="Ubah isi Komentar..."
                    className="h-8 pl-8  lg:h-10 lg:w-full lg:pl-12 lg:text-lg"
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
