import QuestionCard from "./QuestionCard";

const dummyData = [
  {
    name: "Zaky Shahab",
    created_at: "Budidiyawan",
    image: "/images/user-1.jpg",
    question:
      "Selamat datang di Ynsect, pionir dalam industri pertanian berkelanjutan.Kami berkomitmen untuk menghadirkan solusi inovatif yang memungkinkanpertumbuhan ekonomi yang seimbang dengan pelestarian lingkungan. Salahsatu produk unggulan kami adalah budidaya maggot, dan di sini kami akanmenjelaskan manfaatnya yang luar biasa. Budidaya maggot bukan hanyamemberikan solusi untuk kebutuhan pakan dan pertanian, tetapi jugamembantu mewujudkan visi kami untuk menciptakan masa depan yang lebihhijau dan berkelanjutan. Bersama-sama, mari kita berkontribusi padaperubahan positif bagi lingkungan dan masyarakat global.",
    comments: [
      {
        name: "Kang Komen",
        comment: "Gacor Kangg",
        image: "/images/user-1.jpg",
      },
      {
        name: "Si Paling",
        comment: "Mantabs",
        image: "/images/user-2.jpg",
      },
      {
        name: "Si Paling",
        comment: "Mantabs",
        image: "/images/user-2.jpg",
      },
    ],
  },
  {
    name: "Eka Putra",
    created_at: "Pemimpin Teknologi",
    image: "/images/user-2.jpg",
    question:
      "Selamat datang di GreenGrow, perintis dalam pengembangan teknologi pertanian terbaru. Kami berdedikasi untuk menciptakan solusi inovatif yang memungkinkan pertumbuhan tanaman yang lebih sehat dan produktif. Salah satu terobosan terbesar kami adalah sistem hidroponik vertikal yang memungkinkan pertanian tanpa tanah secara efisien dan ramah lingkungan. Dengan teknologi kami, kami berharap dapat mengatasi tantangan pangan global dan mendukung keberlanjutan lingkungan. Bergabunglah bersama kami untuk menciptakan masa depan pertanian yang lebih cerah!",
    comments: [
      {
        name: "Tani Maju",
        comment: "Keren banget inovasinya!",
        image: "/images/user-.jpg",
      },
      {
        name: "Pak Petani",
        comment: "Sangat menjanjikan untuk masa depan pertanian!",
        image: "/images/user-5.jpg",
      },
    ],
  },
  {
    name: "Siti Nurhayati",
    created_at: "Ahli Lingkungan",
    image: "/images/user-1.jpg",
    question:
      "Halo! Selamat datang di EcoHarmony, perusahaan yang berkomitmen untuk menjaga keseimbangan alam dan mempromosikan gaya hidup berkelanjutan. Kami menyadari pentingnya menjaga lingkungan bagi kesejahteraan manusia dan planet kita. Salah satu langkah yang kami ambil adalah dengan mengembangkan produk-produk ramah lingkungan seperti pembalut kain yang dapat digunakan berulang kali. Kami juga aktif dalam kampanye penyadartahuan tentang pengurangan limbah plastik dan upaya pelestarian habitat satwa liar. Mari bersama-sama kita lakukan perubahan positif untuk bumi kita!",
    comments: [
      {
        name: "Bumi Sejahtera",
        comment: "Terima kasih sudah peduli terhadap lingkungan!",
        image: "/images/user-7.jpg",
      },
      {
        name: "Eko Sadar",
        comment: "Saya sangat mendukung misi perusahaan ini!",
        image: "/images/user-8.jpg",
      },
    ],
  },
];

export default function QuestionList() {
  return (
    <main className="flex flex-col gap-6">
      {dummyData.map((data) => (
        <QuestionCard
          key={data.name}
          name={data.name}
          created_at={data.created_at}
          image={data.image}
          question={data.question}
          comments={data.comments}
        />
      ))}
    </main>
  );
}
