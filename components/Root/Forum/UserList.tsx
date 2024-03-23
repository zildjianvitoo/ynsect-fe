import Image from "next/image";

const dummyData = [
  {
    name: "Zaky Shahab",
    role: "Budidiyawan",
    image: "/images/user-1.jpg",
  },
  {
    name: "Satria Gunawan",
    role: "Customer",
    image: "/images/user-2.jpg",
  },
  {
    name: "Sapalah Itu",
    role: "Budidiyawan",
    image: "/images/user-1.jpg",
  },
  {
    name: "Random Peps",
    role: "Customer",
    image: "/images/user-2.jpg",
  },
];

export default function UserList() {
  return (
    <>
      <div className="mt-4 text-2xl font-bold">Post Lainnya</div>
      <div className="mt-3 flex flex-col gap-12">
        {dummyData.map((data) => (
          <div
            key={data.name}
            className="flex h-14 items-center gap-4 rounded-lg pl-1.5"
          >
            <div className="relative h-14 w-14 overflow-hidden rounded-full">
              <Image
                src={data.image}
                alt={data.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-1">
              <div className="text-xl font-semibold">{data.name}</div>
              <div className=" text-slate-500">{data.role}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
