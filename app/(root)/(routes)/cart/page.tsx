import CartProductList from "@/components/Root/Cart/CartProductList";
import ShipmentBox from "@/components/Root/Product/ShipmentBox";
import TotalBox from "@/components/Root/Product/TotalBox";
import { Button } from "@/components/ui/button";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { toast } from "sonner";
import { redirect } from "next/navigation";

type Props = {};

export default async function CartPage({}: Props) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  return (
    <section className="container mt-36 py-3">
      <div className="flex flex-col gap-6">
        <h1 className="mt-2 text-4xl font-bold md:text-5xl lg:text-6xl">
          Keranjang
        </h1>
        <div className="flex flex-col gap-8 lg:flex-row ">
          <div className="flex w-full basis-[65%]  flex-col gap-6">
            <CartProductList />
          </div>
          <div className="flex w-full  basis-[35%] flex-col gap-8">
            <div className="flex flex-col gap-2 rounded-lg border border-slate-300 p-6">
              <h3 className=" text-xl font-bold lg:text-2xl">
                Ringkasan Belanja
              </h3>
              <div className="mt-2 flex items-center justify-between">
                <p className="text-slate-500">Subtotal</p>
                <h3 className=" text-xl font-bold lg:text-2xl">IDR 32,000</h3>
              </div>
              <Button className="mt-2 h-12 border border-primary text-lg font-medium">
                Beli
              </Button>
            </div>
            <ShipmentBox />
          </div>
        </div>
      </div>
    </section>
  );
}
