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
      <p className="text-4xl font-bold text-primary">{title}</p>
      <p className="text-justify text-xl italic tracking-wide">{desc}</p>
      <hr />
      <div className="flex items-center gap-4">
        <div className="relative h-20 w-20 overflow-hidden rounded-full border">
          <Image src={image} alt={name} fill className="object-cover" />
        </div>
        <div>
          <p className="text-3xl font-bold text-primary">{name}</p>
          <p className="mt-2 text-xl">{job}</p>
        </div>
      </div>
    </div>
  );
}
