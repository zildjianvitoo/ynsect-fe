import Image from "next/image";
import { PiChats } from "react-icons/pi";

type Props = {
  name: string;
  job: string;
  experience: string;
  status: string;
  image: string;
};

export default function ProsCard({
  name,
  job,
  experience,
  status,
  image,
}: Props) {
  return (
    <div className="flex flex-col gap-4 rounded-lg border bg-secondary px-5 py-7">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md">
        <Image src={image} alt={name} fill className="object-cover" />
        <div className="absolute left-3 top-3 rounded-sm bg-yellow-100 px-2 py-1 text-yellow-500">
          {status}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="text-3xl font-bold">{name}</div>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-lg font-semibold">{job}</div>
            <div className="text-lg font-extralight">
              {experience} Tahun Pengalaman
            </div>
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-3xl text-white">
            <PiChats />
          </div>
        </div>
      </div>
    </div>
  );
}
