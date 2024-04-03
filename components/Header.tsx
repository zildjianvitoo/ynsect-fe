import { ReactNode } from "react";

type HeaderProps = {
  head: string;
  desc: string;
};

const Header = ({ head, desc }: HeaderProps) => {
  return (
    <header className="mt-2">
      <h1 className="text-4xl font-bold text-primary drop-shadow-[0_4px_3px_#00000032]">
        {head}
      </h1>
      <p className="mt-2 leading-6">{desc}</p>
    </header>
  );
};

export default Header;
