import Biobox from "@/components/Root/Service/Biobox";
import SetorSampah from "@/components/Root/Service/SetorSampah";
import WasteManagement from "@/components/Root/Service/WasteManagement";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";
import Image from "next/image";
import { ReactNode } from "react";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { MdOutlineArrowForwardIos } from "react-icons/md";

type Props = {
  params: {
    serviceName: string;
  };
};

export default function ServiceDetail({ params: { serviceName } }: Props) {
  const ServiceFeature = () => {
    switch (serviceName) {
      case "biobox":
        return <Biobox />;
      case "waste-management":
        return <WasteManagement />;
      case "setor-sampah":
        return <SetorSampah />;
      default:
        redirect("/services");
    }
  };

  return (
    <section className="container pt-20 md:pt-24 lg:pt-32">
      <ServiceFeature />
    </section>
  );
}
