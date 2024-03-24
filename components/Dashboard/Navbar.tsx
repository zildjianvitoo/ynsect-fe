import { GoBell } from "react-icons/go";
import SearchInput from "./SearchInput";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between border-b p-6">
      <div className="flex flex-col gap-2">
        <h3 className="text-3xl font-bold text-primary">Halo, Dapa</h3>
        <p className="text-lg  text-slate-500 lg:text-xl">
          Yuk Cek dashboard kamu hari ini!
        </p>
      </div>
      <div className="flex gap-4">
        <SearchInput />
        <div className="flex h-14 w-14 items-center justify-center rounded-lg border text-2xl text-black">
          <GoBell />
        </div>
        <div className="relative h-14 w-14 overflow-hidden rounded-full">
          <Image
            src="/images/user-1.jpg"
            alt="User-1 profile picture"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </nav>
  );
}
