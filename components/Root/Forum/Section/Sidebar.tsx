import SearchBar from "../SearchBar";
import UserList from "../UserList";
import ForumSection from "../ForumSection";

export default function Sidebar() {
  return (
    <aside className="flex flex-col gap-6">
      <SearchBar />
      <ForumSection />
      <UserList />
    </aside>
  );
}
