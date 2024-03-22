type Props = {
  isReverse?: boolean;
};

export default function GalleryCard({ isReverse }: Props) {
  return (
    <div
      className={`flex flex-col gap-4 md:flex-row ${isReverse && "md:flex-row-reverse"}`}
    >
      <div className="h-32 grow-[3] rounded-lg bg-green-200 md:h-48"></div>
      <div className="h-32 grow-[2] rounded-lg bg-green-200 md:h-48"></div>
      <div className="h-32 grow-[1] rounded-lg bg-green-200 md:h-48"></div>
    </div>
  );
}
