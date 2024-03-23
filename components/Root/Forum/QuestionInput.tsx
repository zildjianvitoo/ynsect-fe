"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Search, SendHorizontal } from "lucide-react";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FaSquarePlus } from "react-icons/fa6";

const FormSchema = z.object({
  questionValue: z.string().min(2, {
    message: "Minimal 2 karakter",
  }),
});

type FormFields = z.infer<typeof FormSchema>;

export default function QuestionInput() {
  const form = useForm<FormFields>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      questionValue: "",
    },
  });

  function onSubmit(fields: FormFields) {
    console.log(fields);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="relative flex items-center">
          <FaSquarePlus className="absolute left-5 text-2xl text-slate-500" />
          <FormField
            control={form.control}
            name="questionValue"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    placeholder="Ketik Pertanyaan"
                    className="h-14 pl-16 text-xl md:w-full"
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
            <SendHorizontal
              className="text-slate-500"
              size={32}
              strokeWidth={1.25}
            />
          </Button>
        </div>
      </form>
    </Form>
  );
}
