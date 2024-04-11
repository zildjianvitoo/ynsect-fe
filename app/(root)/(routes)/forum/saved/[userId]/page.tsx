import QuestionCard from "@/components/Root/Forum/QuestionCard";
import QuestionInput from "@/components/Root/Forum/QuestionInput";
import Sidebar from "@/components/Root/Forum/Section/Sidebar";
import { getCommentByForumId } from "@/lib/network-data/comment";
import { getAllForums } from "@/lib/network-data/forum";
import { formatDistanceToNow } from "date-fns";

export default async function ForumSavedByUserId({
  params,
}: {
  params: { userId: string };
}) {
  const { data } = await getAllForums();
  const getIdFromParams = params.userId;
  const filterDataByUserId = data.filter(
    (item) => item.userId === Number(getIdFromParams),
  );
  return (
    <section className="mt-[76px] flex flex-col gap-6 lg:container lg:mt-36 lg:flex-row lg:py-3">
      <Sidebar />

      <section className="ml-[340px] mt-16 flex w-[75%] flex-col gap-3 max-md:container sm:w-full sm:pr-4 lg:ml-0 lg:mt-0 lg:gap-6 ">
        <QuestionInput />
        <div className="">
          <h1 className="text-2xl  font-semibold text-primary lg:text-4xl">
            Your Saved Post
          </h1>
          <p className="mt-2 text-xs lg:text-lg">
            These are question that you saved from other&apos;s
          </p>
        </div>
        <main className="flex flex-col gap-6">
          {filterDataByUserId.reverse().map(async (question) => {
            const { data: comment } = await getCommentByForumId({
              forumId: question.id!.toString(),
            });
            const dateConvert = formatDistanceToNow(
              new Date(question.createdAt!),
              {
                addSuffix: true,
              },
            );
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
      </section>
    </section>
  );
}
