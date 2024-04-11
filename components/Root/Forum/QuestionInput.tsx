"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Search, SendHorizontal } from "lucide-react";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FaSquarePlus } from "react-icons/fa6";
import { postForum } from "@/lib/network-data/forum";
import { toast } from "sonner";
import { usePathname, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const FormSchema = z.object({
  questionValue: z.string().min(2, {
    message: "Minimal 2 karakter",
  }),
});

type FormFields = z.infer<typeof FormSchema>;

export default function QuestionInput() {
  const router = useRouter();
  const { data } = useSession();
  const pathname = usePathname();
  const form = useForm<FormFields>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      questionValue: "",
    },
  });

  async function onSubmit(values: FormFields) {
    try {
      if (!data?.user) {
        router.push("/login");
      }
      if (data) {
        await postForum({
          content: values.questionValue,
          userId: data.user.id,
          token: data.user.token,
        });
        toast.success("Pertanyaan berhasil di posting!", {
          description: "Silahkan berdiskusi dengan sopan",
        });
        if (pathname === "/forum") {
          form.reset();
          return router.refresh();
        } else {
          form.reset();
          router.refresh();
          return router.push("/forum");
        }
      }
    } catch (error) {
      console.log(error);
      toast.error("Pertanyaan gagal terposting!", {
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
            name="questionValue"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    placeholder="Ketik Pertanyaan"
                    className="h-10 pl-10  lg:h-14 lg:w-full lg:pl-16 lg:text-xl"
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
