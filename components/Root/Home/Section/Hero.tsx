import { icons } from "lucide-react";
import Image from "next/image";
import { HiTrash, HiUsers } from "react-icons/hi";
import { RiBuildingFill } from "react-icons/ri";

type Props = {};

const datas = [
  { title: "Pembudidaya", amount: "520+", icon: <HiUsers /> },
  { title: "Perusahaan", amount: "23+", icon: <RiBuildingFill /> },
  { title: "Olah Sampah", amount: "413 Ton", icon: <HiTrash /> },
];

function Hero({}: Props) {
  return (
    <section className="relative min-h-screen overflow-hidden py-40 md:py-64">
      <Image
        src="/images/landing-hero.jpg"
        alt="Food Waste image"
        fill
        className="absolute -z-20 object-cover"
      />
      <div className="absolute left-0 top-0 -z-10 h-full w-full bg-black/75 " />
      <div className="container  z-20">
        <div className="flex flex-col gap-4 text-center md:gap-6 md:text-left">
          <p className="text-lg text-white md:text-2xl">
            Ynsect, Cultivating a Sustainable Future with Maggot Farming.
          </p>
          <h1 className="text-5xl font-bold text-[#D1F6E6] md:text-6xl">
            Transforming Waste into Wealth
          </h1>
          <h2 className="text-white md:text-xl">Food Waste Management</h2>
        </div>
        <div className="mt-16 flex flex-col gap-8 md:mt-10 md:flex-row md:gap-6">
          {datas.map((data, i) => (
            <div
              className="flex flex-row-reverse items-center justify-center  gap-2 rounded-t-xl rounded-bl-xl text-white md:w-60 md:flex-col md:items-start md:bg-[#F4FFFE] md:px-8 md:pb-6 md:pt-4 md:text-primary "
              key={i}
            >
              <div className="flex items-center gap-2 ">
                <span className="hidden md:block md:text-3xl">{data.icon}</span>
                <span className="text-2xl md:text-xl">{data.title}</span>
              </div>
              <div className="text-2xl font-bold md:mt-5 md:text-4xl">
                {data.amount}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
