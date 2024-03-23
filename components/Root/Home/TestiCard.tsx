import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";

type Props = {
  title: string;
  desc: string;
  image: string;
  name: string;
  job: string;
};

export default function TestiCard({ title, desc, image, name, job }: Props) {
  return (
    <div className="flex w-full flex-col gap-5 rounded-xl border-2 border-[#70CAB4] p-6">
      <div className="text-2xl text-primary">
        <FaQuoteLeft />
      </div>
      <p className="text-3xl font-bold text-primary md:text-4xl">{title}</p>
      <p className="text-lg italic tracking-wide md:text-justify md:text-xl">
        {desc}
      </p>
      <hr />
      <div className="flex items-center gap-4">
        <div className="relative h-16 w-16 overflow-hidden rounded-full border md:h-20 md:w-20">
          <Image src={image} alt={name} fill className="object-cover" />
        </div>
        <div>
          <p className="text-2xl font-bold text-primary md:text-3xl">{name}</p>
          <p className="text-lg md:mt-2 md:text-xl">{job}</p>
        </div>
      </div>
    </div>
  );
}
