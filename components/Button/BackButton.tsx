import { ReactNode } from "react";

type BackButtonProps = {
  route: string;
  icon: ReactNode;
  text: string;
};

const BackButton = ({ route, icon, text }: BackButtonProps) => {
  return (
    <a href={route} className="flex items-center gap-1.5">
      <div className="text-3xl">{icon}</div>
      <div className="text-xl">{text}</div>
    </a>
  );
};

export default BackButton;
