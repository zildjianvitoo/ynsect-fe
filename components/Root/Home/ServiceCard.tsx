import Image from "next/image";
import Link from "next/link";
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
      className={`relative aspect-square max-h-80 w-full overflow-hidden rounded-lg lg:max-h-none lg:min-h-80 ${isJumbo ? "lg:aspect-auto lg:h-full" : "lg:aspect-[5/3]"}`}
    >
      <Image src={image} alt={title} fill className=" object-cover" />
      <div className="absolute z-10 h-full w-full bg-black/75" />

      <div className="absolute bottom-0 z-20 flex flex-col gap-4 p-6 text-white">
        <p className="text-4xl font-bold lg:text-5xl">{title}</p>
        <p className="lg:text-xl">{desc}</p>
        <Link
          href={link}
          className="flex max-w-fit items-center gap-2 rounded-lg bg-primary px-4 py-2 text-lg text-white md:px-7 md:py-3 md:text-xl"
        >
          <div className="">Learn More</div>
          <IoIosArrowForward className="text-xl" />
        </Link>
      </div>
    </div>
  );
}
