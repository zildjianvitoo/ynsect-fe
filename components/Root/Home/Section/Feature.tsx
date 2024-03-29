import { PiKeyboardFill } from "react-icons/pi";
import { HiPresentationChartLine, HiTrash, HiUsers } from "react-icons/hi";
import { BsCalendar2WeekFill } from "react-icons/bs";
import { RiQuestionnaireFill } from "react-icons/ri";
import { FaClock } from "react-icons/fa";
import FeatureCard from "../FeatureCard";

const cardContents = [
  {
    title: "Easy-to-use",
    icon: <HiTrash />,
    desc: "Kami menghadirkan tampilan interface yang mempermudah kamu dalam menggunakan berbagai fitur kami, dan memaksimalkan kinerja dari ynsect!",
  },
  {
    title: "Pro Dashboard",
    icon: <PiKeyboardFill />,
    desc: "Kami menghadirkan tampilan interface yang mempermudah kamu dalam menggunakan berbagai fitur kami, dan memaksimalkan kinerja dari ynsect!",
  },
  {
    title: "Tracking Lifecycle",
    icon: <BsCalendar2WeekFill />,
    desc: "Kemudahan anda dalam melakukan budidaya menjadi prioritas kami, fitur tracking hadir sebagai jawaban bagi anda agar dapat memantau maggot anda!",
  },
  {
    title: "Waste Database",
    icon: <HiPresentationChartLine />,
    desc: "Kamu dapat memanfaatkan database untuk mengetahui dan memantau jumlah limbah organik sebagai pakan dari para maggot nantinya!",
  },
  {
    title: "Ask The Pro",
    icon: <RiQuestionnaireFill />,
    desc: "Tak perlu khawatir kebingungan, kami menghadirkan para budidayawan yang berpengalaman yang selalu siap membantu anda kapanpun!",
  },
  {
    title: "Agenda",
    icon: <FaClock />,
    desc: "Jadwalkan berbagai kegiatan dashboard, dan siapkan notifikasi agar kamu dapat melakukan budidaya dengan disiplin, tertib, aman, dan nyaman!",
  },
];

export default function Feature() {
  return (
    <div className="relative w-full">
      <div className="absolute -right-48 top-4 -z-10 h-96 w-96 rounded-full bg-gradient-to-tl from-[#94bbb9] to-transparent" />
      <section id="feature" className="container w-full overflow-hidden pt-16">
        <header className="relative ">
          <h2 className="text-3xl font-bold md:text-5xl lg:text-6xl">
            Matchless features <br /> crafted to suit your triumph.
          </h2>
          <p className="top-2 mt-4 text-right text-[#03201E] lg:text-xl xl:absolute xl:right-[250px] xl:mt-0 xl:max-w-lg">
            Ynsect hadir sebagai solusi budidaya maggot kekinian berkolaborasi
            dengan teknologi
          </p>
        </header>
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cardContents.map((content, i) => (
            <FeatureCard
              key={i}
              title={content.title}
              icon={content.icon}
              desc={content.desc}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
