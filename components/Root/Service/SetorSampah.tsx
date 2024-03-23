import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoChevronBackCircleOutline } from "react-icons/io5";

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
        <p className=" mt-2 text-lg text-[#03201E] md:text-xl">
          BioBox adalah sistem budidaya maggot yang terencana dan terkontrol,
          yang memanfaatkan limbah organik sebagai substrat untuk memproduksi
          larva. Sistem ini biasanya terdiri dari kontainer yang dilengkapi
          dengan filter dan ventilasi udara yang sesuai untuk menciptakan
          kondisi optimal bagi pertumbuhan larva. Dalam BioBox, limbah organik
          seperti sisa makanan atau pupuk kandang digunakan sebagai bahan baku
          untuk menarik lalat betina untuk bertelur, sehingga menghasilkan
          populasi maggot yang berlimpah.
        </p>
      </div>
      <div className="flex flex-col gap-8 md:gap-10 lg:gap-12">
        <div className="relative  overflow-hidden rounded-md ">
          <Image
            src="/images/biobox.jpeg"
            alt="Biobox"
            fill
            className="object-cover"
          />
          <div className="absolute left-0 top-0 z-10 h-full w-full bg-black/75 " />
          <div className="relative z-20 flex h-full flex-col justify-center  gap-2  p-4 text-white md:px-0 lg:px-6 lg:py-8">
            <h3 className="text-2xl/snug font-bold tracking-wide text-secondary  md:text-4xl/snug">
              Pengurangan Limbah Organik
            </h3>
            <p className=" w-[60%] text-justify text-slate-100 sm:text-lg md:text-xl">
              Salah satu manfaat utama BioBox adalah kemampuannya untuk mengubah
              limbah organik menjadi sumber protein yang bernilai tinggi. Dengan
              memanfaatkan limbah yang sebelumnya dianggap sebagai masalah
              lingkungan, BioBox membantu mengurangi jumlah sampah dan
              menciptakan nilai tambah dari limbah tersebut.
            </p>
          </div>
        </div>
        <div className="relative  overflow-hidden rounded-md ">
          <Image
            src="/images/biobox.jpeg"
            alt="Biobox"
            fill
            className="object-cover"
          />
          <div className="absolute left-0 top-0 z-10 h-full w-full bg-black/75 " />
          <div className="relative z-20 flex h-full flex-col items-end justify-center gap-2  p-4   text-white md:px-0 lg:px-6 lg:py-8">
            <h3 className="text-2xl/snug font-bold tracking-wide text-secondary  md:text-4xl/snug">
              Kemudahan Penggunaan
            </h3>
            <p className=" w-[60%] text-right text-slate-100 sm:text-lg md:text-xl">
              BioBox dirancang untuk menjadi alat yang mudah dioperasikan dan
              dikelola. Dengan sedikit perawatan dan pemantauan, petani atau
              peternak dapat menghasilkan maggot secara konsisten tanpa
              memerlukan investasi yang besar dalam hal waktu atau biaya.
            </p>
          </div>
        </div>
        <div className="relative  overflow-hidden rounded-md ">
          <Image
            src="/images/biobox.jpeg"
            alt="Biobox"
            fill
            className="object-cover"
          />
          <div className="absolute left-0 top-0 z-10 h-full w-full bg-black/75 " />
          <div className="relative z-20 flex h-full flex-col justify-center  gap-2  p-4 text-white md:px-0 lg:px-6 lg:py-8">
            <h3 className="text-2xl/snug font-bold tracking-wide text-secondary  md:text-4xl/snug">
              Kemandirian Pangan
            </h3>
            <p className=" w-[60%] text-justify text-slate-100 sm:text-lg md:text-xl">
              Dengan menggunakan BioBox untuk memproduksi pakan alternatif,
              petani dan peternak dapat meningkatkan kemandirian pangan mereka.
              Mereka tidak lagi tergantung pada pasokan pakan luar yang
              seringkali tidak terjangkau atau sulit didapatkan.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
