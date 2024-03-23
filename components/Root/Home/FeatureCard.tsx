type FeatureCardProps = {
  title: string;
  icon: React.ReactNode;
  desc: string;
};

export default function FeatureCard({ title, icon, desc }: FeatureCardProps) {
  return (
    <div className="rounded-lg bg-primary px-4 py-6">
      <div className="flex items-center gap-4">
        <span className="rounded-lg bg-[#0A343A] p-2 text-2xl text-white md:text-3xl">
          {icon}
        </span>
        <span className="text-2xl font-bold text-white md:text-3xl">
          {title}
        </span>
      </div>
      <p className="mt-2 font-thin  tracking-wider text-white md:text-lg">
        {desc}
      </p>
    </div>
  );
}
