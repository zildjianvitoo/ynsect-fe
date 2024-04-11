import { getAllForums } from "@/lib/network-data/forum";
import QuestionCard from "./QuestionCard";
import { formatDistanceToNow } from "date-fns";
import { getCommentByForumId } from "@/lib/network-data/comment";

export default async function QuestionList({ query }: { query: string }) {
  const { data } = await getAllForums();

  let filteredData;

  if (query) {
    filteredData = data.filter((item) =>
      item.content.toLowerCase().includes(query?.toLowerCase()),
    );
  } else {
    filteredData = data;
  }

  return (
    <main className="flex flex-col gap-6">
      {filteredData.reverse().map(async (question) => {
        const { data: comment } = await getCommentByForumId({
          forumId: question.id!.toString(),
        });
        const dateConvert = formatDistanceToNow(new Date(question.createdAt!), {
          addSuffix: true,
        });
        return (
          <QuestionCard
            key={question.id}
            forumId={question.id!.toString()}
            name={question.user!.name}
            userId={question.userId}
            createdAt={dateConvert}
            question={question.content}
            comments={comment}
          />
        );
      })}
    </main>
  );
}
