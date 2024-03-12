import { icons } from "lucide-react";
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
    <div className="bg-black/80 px-16 py-64">
      <div className="flex flex-col gap-6">
        <p className="text-2xl text-white">
          Ynsect, Cultivating a Sustainable Future with Maggot Farming.
        </p>
        <h1 className="text-6xl font-bold text-[#D1F6E6]">
          Transforming Waste into Wealth
        </h1>
        <h2 className="text-xl text-white">Food Waste Management</h2>
      </div>
      <div className="mt-10 flex gap-6">
        {datas.map((data, i) => (
          <div
            className="w-60 rounded-t-xl rounded-bl-xl bg-[#F4FFFE] px-8 pb-6 pt-4"
            key={i}
          >
            <div className="flex items-center gap-2">
              <span className="text-3xl text-primary">{data.icon}</span>
              <span className="text-xl text-primary">{data.title}</span>
            </div>
            <div className="mt-5 text-4xl font-bold text-primary">
              {data.amount}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hero;
