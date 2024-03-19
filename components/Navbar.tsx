import Image from "next/image";
import { CiShoppingBasket } from "react-icons/ci";
import { GoPlus } from "react-icons/go";

type Props = {};

const links = [
  { name: "Product", route: "/product" },
  { name: "About Us", route: "/about" },
  { name: "Service", route: "/service" },
  { name: "Forum", route: "/forum" },
];

export default function Navbar({}: Props) {
  return (
    <nav className="absolute  flex w-full items-center justify-between px-6 py-6 sm:px-10 lg:px-16">
      <div className="">
        <Image
          src="/images/logo-white.png"
          alt="Ynsect Logo"
          width={110}
          height={55}
        />
      </div>
      <div className="">
        <ul className="flex gap-16">
          {links.map((link, i) => (
            <li key={i} className="text-lg text-white">
              <a href={link.route}>{link.name}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex gap-6">
        <div className="rounded-lg border border-primary bg-[#eafff6]  p-3 text-2xl">
          <CiShoppingBasket />
        </div>
        <div className="flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-white ">
          <span className="text-xl">Join Us</span>
          <span className="">
            <GoPlus />
          </span>
        </div>
      </div>
    </nav>
  );
}
