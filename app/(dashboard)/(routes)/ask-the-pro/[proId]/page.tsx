import ProsInfo from "@/components/Dashboard/Ask-the-pro/Ask-the-pro-detailed/ProsInfo";

const dummyData = {
  name: "Andre Martasyah",
  job: "Founder Magalarva",
  experience: "7",
  image: "/images/pro-1.jpg",
  desc: "Pada awalnya, Andre terinspirasi oleh potensi maggot, larva dari lalat hitam, dalam mengubah limbah organik menjadi sumber protein berkualitas tinggi. Dia percaya bahwa dengan memanfaatkan potensi alam ini, ia dapat menciptakan solusi yang berkelanjutan untuk masalah pangan dan limbah. Dengan tekad kuat dan pengetahuan yang mendalam dalam ilmu pertanian, André mulai merancang sistem budidaya maggot yang efisien dan ramah lingkungan. Magalarva didirikan dengan misi untuk menjadi pemimpin dalam industri pertanian berkelanjutan dengan memanfaatkan potensi maggot dalam mengolah limbah organik dan memproduksi pakan ternak yang berkualitas. André dan timnya bekerja keras untuk mengembangkan teknologi dan proses budidaya yang inovatif, yang memungkinkan mereka untuk menghasilkan maggot secara efisien dan konsisten.",
  achievments: [
    "Top 3 Sustainable Agriculture Innovation Award",
    "Top 10 Green-Tech Solutions Worldwide",
    "Top 3 Environmental Sustainability Excellence",
    "Top 10 Revolutionary Food Technology Innovations",
    "Top 3 Waste Management Innovation Prize",
    "Top 10 Young Entrepreneurship Award",
    "Top 3 Agricultural Research Breakthroughs",
    "Top 10 Cutting-edge Animal Feed Solutions",
    "Top 3 Sustainable Industry Leadership Award",
    "Top 10 Humanitarian Impact Recognition",
  ],
};

export default function AskThePro() {
  return (
    <section id="ask-the-pro" className="flex flex-col gap-6 p-6">
      <ProsInfo
        key={dummyData.name}
        name={dummyData.name}
        job={dummyData.job}
        experience={dummyData.experience}
        image={dummyData.image}
      />
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-bold">Deskripsi</h2>
        <p className="text-justify font-light tracking-wider">
          {dummyData.desc}
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-bold">Penghargaan</h2>
        <ol>
          {dummyData.achievments.map((achievment, i) => (
            <li
              key={i}
              className="ml-7 list-decimal text-justify font-light tracking-wider"
            >
              {achievment}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
