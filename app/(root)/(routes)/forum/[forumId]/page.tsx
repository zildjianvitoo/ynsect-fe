import QuestionCard from "@/components/Root/Forum/QuestionCard";
import QuestionInput from "@/components/Root/Forum/QuestionInput";
import SearchBar from "@/components/Root/Forum/SearchBar";
import Sidebar from "@/components/Root/Forum/Section/Sidebar";
import { getCommentByForumId } from "@/lib/network-data/comment";
import { getForumById } from "@/lib/network-data/forum";
import { formatDistanceToNow } from "date-fns";
import Link from "next/link";
import { IoChevronBackCircleOutline } from "react-icons/io5";

export default async function ForumDetail({
  params,
}: {
  params: { forumId: string };
}) {
  const { data: question } = await getForumById(params);
  const { data: comment } = await getCommentByForumId(params);
  const dateConvert = formatDistanceToNow(new Date(question.createdAt), {
    addSuffix: true,
  });
  return (
    <section className="mt-[76px] flex flex-col gap-6 lg:container lg:mt-36 lg:py-3">
      <div className="hidden gap-6 lg:flex ">
        <SearchBar />
        <div className="w-full">
          <QuestionInput />
        </div>
      </div>
      <div className="lg:hidden">
        <Sidebar />
      </div>

      <div className="mt-10 max-lg:container lg:mt-0">
        <Link
          href="/forum"
          className="flex items-center gap-1.5 text-2xl lg:mt-0"
        >
          <IoChevronBackCircleOutline />
          <div>Back</div>
        </Link>
        <main className="mt-3 flex flex-col gap-6">
          <QuestionCard
            key={question.id}
            name={question.user!.name}
            createdAt={dateConvert}
            question={question.content}
            comments={comment}
            forumId={params.forumId}
            isDetail
          />
        </main>
      </div>
    </section>
  );
}
