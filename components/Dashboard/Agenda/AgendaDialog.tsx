"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { HiPlus } from "react-icons/hi";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { TypeColumn, TypeColumnValues } from "@/types/board";
import { plusJakarta } from "@/public/font";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";

const FormSchema = z.object({
  title: z.string().min(3, {
    message: "Judul harus berisi minimal 3 karakter.",
  }),
  status: z.enum(TypeColumnValues),
  description: z.string().min(3, {
    message: "Description harus berisi minimal 3 karakter.",
  }),
  deadline: z.date(),
  image: z.instanceof(FileList).optional(),
});

type FormField = z.infer<typeof FormSchema>;

type Props = { status: TypeColumn };

export default function AgendaDialog({ status }: Props) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: "",
      status: status,
      deadline: new Date(),
      description: "",
    },
  });

  const fileRef = form.register("image");

  const onSubmit = (formValues: FormField) => {
    const image = formValues?.image?.item(0);
    console.log(formValues);
  };

  return (
    <Dialog>
      <DialogTrigger>
        <div className="flex h-10 w-full cursor-pointer items-center justify-between rounded-md bg-white p-4">
          <h5 className="text-lg font-semibold text-primary">Tambah Card</h5>
          <HiPlus className="cursor-pointer text-lg  text-primary " />
        </div>
      </DialogTrigger>
      <DialogContent
        className={cn(" max-w-[50%] bg-secondary p-6", plusJakarta.className)}
      >
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className=" space-y-4 lg:space-y-6"
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xl font-bold lg:text-2xl">
                    Judul Kegiatan
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Penetasan Telur"
                      className="h-12 text-lg"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xl font-bold lg:text-2xl">
                    Deskripsi Kegiatan
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder={`Pemindahan Biobox \nPemberian vitamin `}
                      className="h-12 text-lg"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="deadline"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel className="text-xl font-bold lg:text-2xl">
                    Deadline
                  </FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            " pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground",
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pilih tanggal</span>
                          )}
                          <CalendarIcon className=" ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        className="w-fit text-lg"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) => date < new Date("1900-01-01")}
                        initialFocus
                        custom={false}
                      />
                    </PopoverContent>
                  </Popover>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xl font-bold lg:text-2xl">
                    Foto
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="file"
                      accept="image/jpeg image/jpg image/png image/webp"
                      placeholder="Penetasan Telur"
                      className="h-12 cursor-pointer text-lg"
                      {...fileRef}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
