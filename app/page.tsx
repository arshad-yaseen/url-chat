import InputAndOutput from "@/components/input-and-output";
import Instructions from "@/components/instructions";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full">
      <InputAndOutput />
      <Instructions />
    </main>
  );
}
