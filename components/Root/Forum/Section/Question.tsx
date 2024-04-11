import QuestionInput from "../QuestionInput";
import QuestionList from "../QuestionList";

export default function Question() {
  return (
    <section className="mt-16 flex w-full flex-col gap-3 pr-4 max-lg:container lg:ml-0 lg:mt-0 lg:gap-6 lg:pr-0 ">
      <QuestionInput />
      <QuestionList />
    </section>
  );
}
