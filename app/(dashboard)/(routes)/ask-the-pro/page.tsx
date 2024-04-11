import ProsCard from "@/components/Dashboard/Ask-the-pro/ProsCard";

const dummyData = [
  {
    id: 1,
    name: "Andre Martasyah",
    job: "Founder Magalarva",
    experience: "7",
    status: "Top Rated",
    image: "/images/pro-1.jpg",
  },
  {
    id: 2,
    name: "Budi Hartono",
    job: "Founder Mageasy",
    experience: "10",
    status: "Top Rated",
    image: "/images/pro-2.jpg",
  },
  {
    id: 3,
    name: "Desi Amrina",
    job: "Founder TernakMudah",
    experience: "8",
    status: "Top Rated",
    image: "/images/pro-3.jpg",
  },
  {
    id: 4,
    name: "Cahya Rahmi",
    job: "Peternak Lele",
    experience: "6",
    status: "Top Rated",
    image: "/images/pro-4.jpeg",
  },
  {
    id: 5,
    name: "Bayu Herman",
    job: "Data Scientist",
    experience: "9",
    status: "Top Rated",
    image: "/images/pro-5.jpeg",
  },
  {
    id: 6,
    name: "Bob Sanusi",
    job: "FC Equiment Maglarva",
    experience: "7",
    status: "Top Rated",
    image: "/images/pro-6.jpeg",
  },
];

export default async function AskThePro() {
  return (
    <section
      id="ask-the-pro"
      className="grid grid-cols-1 gap-6 p-6 md:grid-cols-2 lg:grid-cols-3"
    >
      {dummyData.map((data) => (
        <ProsCard
          id={data.id}
          key={data.name}
          name={data.name}
          job={data.job}
          experience={data.experience}
          status={data.status}
          image={data.image}
        />
      ))}
    </section>
  );
}
