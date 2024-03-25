import QuestionCard from "../QuestionCard";
import QuestionInput from "../QuestionInput";
import QuestionList from "../QuestionList";

export default function Question() {
  return (
    <section className="mt-3 flex w-[75%] flex-col gap-6 sm:w-full sm:pr-4 lg:mt-0 ">
      <QuestionInput />
      <QuestionList />
    </section>
  );
}
