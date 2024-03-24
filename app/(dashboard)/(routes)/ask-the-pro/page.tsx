import ProsCard from "@/components/Dashboard/Ask-the-pro/ProsCard";

const dummyData = [
  {
    name: "Andre Martasyah",
    job: "Founder Magalarva",
    experience: "7",
    status: "Top Rated",
    image: "/images/pro-1.jpg",
  },
  {
    name: "Elena Nguyen",
    job: "Senior Software Engineer",
    experience: "10",
    status: "Top Rated",
    image: "/images/pro-2.jpg",
  },
  {
    name: "Ravi Patel",
    job: "Marketing Director",
    experience: "8",
    status: "Top Rated",
    image: "/images/pro-3.jpg",
  },
  {
    name: "Sophie Lewis",
    job: "UX/UI Designer",
    experience: "6",
    status: "Top Rated",
    image: "/images/pro-2.jpg",
  },
  {
    name: "Carlos Ramirez",
    job: "Data Scientist",
    experience: "9",
    status: "Top Rated",
    image: "/images/pro-1.jpg",
  },
  {
    name: "Aisha Khan",
    job: "Financial Analyst",
    experience: "7",
    status: "Top Rated",
    image: "/images/pro-3.jpg",
  },
];

export default function AskThePro() {
  return (
    <section
      id="ask-the-pro"
      className="grid grid-cols-1 gap-6 p-6 md:grid-cols-2 lg:grid-cols-3"
    >
      {dummyData.map((data) => (
        <ProsCard
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
