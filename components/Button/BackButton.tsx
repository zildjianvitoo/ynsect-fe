import Link from "next/link";
import { ReactNode } from "react";

type BackButtonProps = {
  route: string;
  icon: ReactNode;
  text: string;
};

const BackButton = ({ route, icon, text }: BackButtonProps) => {
  return (
    <Link href={route} className="flex items-center gap-1.5">
      <div className="text-2xl">{icon}</div>
      <div>{text}</div>
    </Link>
  );
};

export default BackButton;
