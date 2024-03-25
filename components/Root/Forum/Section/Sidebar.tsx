import SearchBar from "../SearchBar";
import UserList from "../UserList";
import ForumSection from "../ForumSection";

export default function Sidebar() {
  return (
    <aside className="flex flex-col gap-3 border-r p-3 lg:gap-6 lg:border-none lg:p-0">
      <SearchBar />
      <ForumSection />
      <UserList />
    </aside>
  );
}
