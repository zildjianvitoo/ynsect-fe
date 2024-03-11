import AuthButton from "@/components/Button/AuthButton";

export default function Home() {
  return (
    <main className="py-20 container mx-auto flex flex-col items-center ">
      <h1 className="text-3xl">Home Page</h1>
      <AuthButton />
    </main>
  );
}
