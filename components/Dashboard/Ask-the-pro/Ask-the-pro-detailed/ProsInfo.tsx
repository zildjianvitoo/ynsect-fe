import Image from "next/image";
import { IoIosChatboxes } from "react-icons/io";

type Props = {
  name: string;
  job: string;
  experience: string;
  image: string;
};

export default function ProsInfo({ name, job, experience, image }: Props) {
  return (
    <div className="flex w-full justify-between gap-4 border p-4">
      <div className="flex gap-6">
        <div className="relative aspect-square w-56 overflow-hidden rounded-lg">
          <Image src={image} alt={name} fill className="object-cover" />
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold">{name}</h1>
          <div className="flex flex-col">
            <h2 className="text-lg font-semibold">{job}</h2>
            <div className="text-lg font-extralight">
              {experience} Tahun Pengalaman
            </div>
          </div>
        </div>
      </div>

      <button className="flex h-14 w-72 items-center justify-center gap-4 rounded-lg bg-primary text-xl text-white">
        <a
          href="https://wa.me/6285176734655/?text=Halo%2C%20apa%20kamu%20bisa%20membantu%20saya%20tentang%20seputar%20Ynsect%3F"
          className="flex gap-3"
        >
          Hubungi Saya
          <span className="text-3xl">
            <IoIosChatboxes />
          </span>
        </a>
      </button>
    </div>
  );
}
