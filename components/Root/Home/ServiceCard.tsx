import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";

type Props = {
  title: string;
  desc: string;
  link: string;
  image: string;
  isJumbo?: boolean;
};

export default function ServiceCard({
  title,
  desc,
  link,
  image,
  isJumbo,
}: Props) {
  return (
    <div
      className={`relative aspect-square w-full overflow-hidden rounded-xl ${isJumbo ? "md:aspect-auto md:h-full" : "md:aspect-[5/3]"}`}
    >
      <Image src={image} alt={title} fill className=" object-cover" />
      <div className="absolute z-10 h-full w-full bg-black/75" />

      <div className="absolute bottom-0 z-20 flex flex-col gap-4 p-6 text-white">
        <p className="text-5xl font-bold">{title}</p>
        <p className="text-xl">{desc}</p>
        <div className="flex max-w-fit items-center gap-2 rounded-lg bg-primary px-4 py-2 text-lg text-white md:px-7 md:py-3 md:text-xl">
          <div className="">Learn More</div>
          <IoIosArrowForward className="text-xl" />
        </div>
      </div>
    </div>
  );
}
