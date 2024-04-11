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
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { HiPlus } from "react-icons/hi";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Agenda, TypeColumn, TypeColumnValues } from "@/types/board";
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
import { FaRegEdit } from "react-icons/fa";
import Image from "next/image";
import { BsTrash } from "react-icons/bs";
import { parseISO } from "date-fns";
import {
  createAgenda,
  deleteAgenda,
  updateAgenda,
} from "@/lib/network-data/agenda";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

const FormSchema = z.object({
  title: z.string().min(3, {
    message: "Judul harus berisi minimal 3 karakter.",
  }),
  status: z.enum(TypeColumnValues),
  description: z.string().min(3, {
    message: "Description harus berisi minimal 3 karakter.",
  }),
  deadline: z.date(),
  image: z.any().optional(),
});

type FormField = z.infer<typeof FormSchema>;

type Props = { status: TypeColumn; initialData?: Agenda };

export default function AgendaDialog({ status, initialData }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: initialData?.title,
      status: status,
      deadline: initialData?.deadline
        ? parseISO(initialData?.deadline)
        : new Date(),
      description: initialData?.description,
    },
  });

  const fileRef = form.register("image");

  const onSubmit = async (formValues: FormField) => {
    const image = formValues?.image?.item(0);
    const { deadline, description, status, title } = formValues;
    setIsOpen(false);
    if (initialData) {
      try {
        const { data } = await updateAgenda({
          deadline: deadline.toISOString(),
          description,
          image,
          status,
          title,
          agendaId: initialData.id,
        });
        console.log(data);
        toast.success("Berhasil membuat Card baru");
        router.refresh();
        window.location.reload();
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const { data } = await createAgenda({
          deadline: deadline.toISOString(),
          description,
          image,
          status,
          title,
        });
        toast.success("Berhasil mengupdate Card");
        router.refresh();
        window.location.reload();
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleDeleteAgenda = async (agendaId: string) => {
    try {
      setIsOpen(false);
      await deleteAgenda({ agendaId });
      router.refresh();
      window.location.reload();
    } catch (error) {
      console.log(error);
      toast.error("Terjadi kesalahan", {});
    }
  };

  const handleOpenChange = () => {
    form.reset();
    setIsOpen((prev) => !prev);
  };

  return (
    <Dialog onOpenChange={handleOpenChange} open={isOpen}>
      <DialogTrigger>
        {initialData ? (
          <FaRegEdit className="cursor-pointer text-2xl text-slate-500" />
        ) : (
          <div className="flex h-10 w-full cursor-pointer items-center justify-between rounded-md bg-white p-4">
            <h5 className="text-lg font-semibold text-primary">Tambah Card</h5>
            <HiPlus className="cursor-pointer text-lg  text-primary " />
          </div>
        )}
      </DialogTrigger>
      <DialogContent
        className={cn(" max-w-[50%] bg-secondary p-6", plusJakarta.className)}
      >
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xl font-bold ">
                    Judul Kegiatan
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Penetasan Telur" {...field} />
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
                  <FormLabel className="text-xl font-bold ">
                    Deskripsi Kegiatan
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder={`Pemindahan Biobox \nPemberian vitamin `}
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
                  <FormLabel className="text-xl font-bold ">Deadline</FormLabel>
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
                  <FormLabel className="text-xl font-bold ">Foto</FormLabel>
                  <FormControl>
                    <Input
                      type="file"
                      accept="image/jpeg image/jpg image/png image/webp"
                      placeholder="Penetasan Telur"
                      className=" cursor-pointer "
                      {...fileRef}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {form.watch("image")?.item(0) ? (
              <div className="flex gap-3">
                <figure className="relative h-36 w-1/2">
                  <Image
                    src={URL.createObjectURL(
                      form.getValues("image")?.item(0)! || initialData?.image,
                    )}
                    alt={"preview image"}
                    className="object-cover"
                    fill
                  />
                </figure>
                <BsTrash
                  className="cursor-pointer text-lg text-red-500 transition-all hover:scale-105 hover:text-red-700"
                  onClick={() => form.setValue("image", undefined)}
                />
              </div>
            ) : null}
            <Button type="submit" className="px-6">
              {initialData ? "Simpan" : "Submit"}
            </Button>
            {initialData && (
              <Button
                variant={"ghost"}
                className="ml-2 px-6 text-red-500 hover:bg-red-500 hover:text-white"
                onClick={() => handleDeleteAgenda(initialData.id)}
              >
                Hapus
              </Button>
            )}
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
