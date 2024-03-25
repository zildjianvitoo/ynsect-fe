import Question from "@/components/Root/Forum/Section/Question";
import Sidebar from "@/components/Root/Forum/Section/Sidebar";

export default function Home() {
  return (
    <section className="mt-[76px] flex gap-6 lg:container lg:mt-36 lg:py-3">
      <Sidebar />
      <Question />
    </section>
  );
}
