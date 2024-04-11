import Image from "next/image";

export default function GalleryCardReverse() {
  return (
    <div className={`flex flex-col gap-4 md:flex-row-reverse`}>
      <div className="relative h-32 grow-[3] overflow-hidden rounded-lg md:h-48">
        <Image
          src="/images/about-4.jpeg"
          alt="Gallery"
          fill
          className="object-cover brightness-[30%]"
        />
      </div>
      <div className="relative h-32 grow-[2] overflow-hidden rounded-lg bg-green-200 md:h-48">
        <Image
          src="/images/about-5.jpeg"
          alt="Gallery"
          fill
          className="object-cover brightness-[30%]"
        />
      </div>
      <div className="relative h-32 grow-[1] overflow-hidden rounded-lg bg-green-200 md:h-48">
        <Image
          src="/images/about-6.jpeg"
          alt="Gallery"
          fill
          className="object-cover brightness-[30%]"
        />
      </div>
    </div>
  );
}
