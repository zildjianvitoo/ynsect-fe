import SearchBar from "../SearchBar";
import ForumSection from "../ForumSection";

export default function Sidebar() {
  return (
    <aside className="fixed z-30 flex -translate-y-[1px] flex-row-reverse gap-3 border-b bg-white py-1 max-lg:container lg:static lg:max-h-80 lg:flex-col lg:gap-6 lg:border-r lg:border-none lg:p-0">
      <SearchBar />
      <ForumSection />
    </aside>
  );
}
