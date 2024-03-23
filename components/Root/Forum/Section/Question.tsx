import QuestionCard from "../QuestionCard";
import QuestionInput from "../QuestionInput";
import QuestionList from "../QuestionList";

export default function Question() {
  return (
    <section className="flex w-full flex-col gap-6">
      <QuestionInput />
      <QuestionList />
    </section>
  );
}
