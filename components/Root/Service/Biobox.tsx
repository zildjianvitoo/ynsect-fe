import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoChevronBackCircleOutline } from "react-icons/io5";

type Props = {};

const maggotLifeCycle = [
  {
    title: "Telur BSF",
    image: "/images/Service/telur-bsf.webp",
    description:
      "500 - 900 telur/kluster menetas dalam 3 -4 hari dengan Biobox yang sudah disediakan",
  },
  {
    title: "Bayi Larva",
    image: "/images/Service/bayi-larva.png",
    description:
      "Hari pertama, memiliki ukuran kurang dari 1 mm, hampir tidak terlihat dan siap makan",
  },
  {
    title: "Larva Dewasa",
    image: "/images/Service/larva-dewasa.png",
    description:
      "Usia 0 hingga 21 hari, memiliki warna putih kecoklatan dan siap disantap hewan ternak",
  },
  {
    title: "Prepupa",
    image: "/images/Service/prepupa.png",
    description:
      "Dimulai dari hari ke 22, warna mulai menggelap, memanjat dan mencari tempat kering",
  },
  {
    title: "Pupa",
    image: "/images/Service/pupa.png",
    description:
      "Berwarna hitam dan tidak bergerak dalam kurun waktu 7 hari hingga 1 bulan sampai menetas",
  },
  {
    title: "Indukan Dewasa BSF",
    image: "/images/Service/induka-dewasa-bsf.png",
    description:
      "Betina akan bertelur, betina mati setelah bertelur dan jantan mati setelah kawin",
  },
];

export default function Biobox({}: Props) {
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
        <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">Biobox</h1>
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
      <div className="flex flex-col">
        <h3 className="ml-4 text-xl font-bold text-primary md:text-3xl">
          Siklus Hidup Maggot
        </h3>
        <hr className="mt-4 border-b border-primary" />
        <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {maggotLifeCycle.map((item) => (
            <div
              key={item.title}
              className="flex flex-col rounded-md border border-[#e8e8e8] bg-secondary p-4"
            >
              <figure className="relative h-[170px]  ">
                <Image
                  src={item.image}
                  alt="Telur BSF"
                  fill
                  className="rounded-md object-cover"
                />
              </figure>
              <h4 className="mt-4 text-xl font-bold md:text-3xl">
                {item.title}
              </h4>
              <p className="mt-2 text-slate-500 md:max-w-[80%]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
