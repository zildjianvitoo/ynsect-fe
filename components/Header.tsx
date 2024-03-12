import { ReactNode } from "react";

type HeaderProps = {
  head: string;
  desc: string;
};

const Header = ({ head, desc }: HeaderProps) => {
  return (
    <header className="mt-6">
      <h1 className="text-5xl font-bold text-primary drop-shadow-[0_4px_3px_#00000032]">
        {head}
      </h1>
      <p className="mt-4 text-lg text-justify">{desc}</p>
    </header>
  );
};

export default Header;
