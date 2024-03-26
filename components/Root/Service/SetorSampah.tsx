import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import FormSetorSampah from "./FormSetorSampah";

type Props = {};

export default function SetorSampah({}: Props) {
  return (
    <div className="flex flex-col gap-8 md:gap-10 lg:gap-12">
      <div className="flex flex-col gap-2 text-xl">
        <Link
          href={"/services#our-services"}
          className="flex items-center gap-2 text-[#03201E]"
        >
          <IoChevronBackCircleOutline className="text-3xl" />
          Back
        </Link>
        <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
          Setor Sampah
        </h1>
        <figure className="relative mt-4 h-[330px] w-full">
          <Image
            src={"/images/setor-sampah.jpg"}
            alt="Setor Sampah"
            fill
            className="rounded-md object-cover"
          />
        </figure>
        <p className="mt-2 text-lg text-[#03201E] md:text-xl">
          Setiap langkah dimulai dengan kesadaran akan kebutuhan perubahan. Saat
          Anda mendaftar untuk layanan kami, Anda tidak hanya bergabung dengan
          sebuah layanan, tetapi Anda menjadi bagian dari gerakan yang bertujuan
          untuk mewujudkan lingkungan yang lebih bersih dan lebih lestari. Kami
          bekerja secara bersama-sama untuk menentukan jadwal pengambilan yang
          sesuai dengan kebutuhan Anda. Pada hari yang ditentukan, tim kami tiba
          di depan pintu Anda, siap untuk mengambil beban limbah organik yang
          telah Anda siapkan.
        </p>
      </div>
      <div className="rounded-md border border-[#e8e8e8] p-6">
        <FormSetorSampah />
      </div>
    </div>
  );
}
