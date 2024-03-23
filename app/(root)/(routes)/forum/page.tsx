import Question from "@/components/Root/Forum/Section/Question";
import Sidebar from "@/components/Root/Forum/Section/Sidebar";

export default function Home() {
  return (
    <section className="container mt-36 flex gap-6 py-3">
      <Sidebar />
      <Question />
    </section>
  );
}
