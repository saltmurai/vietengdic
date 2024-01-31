import AddWordButton from "../components/AddWordButton";

export default function IndexPage() {
  return (
    <main className="w-full min-h-screen bg-black">
      <div className="flex justify-end w-full p-4">
        <AddWordButton />
      </div>
    </main>
  );
}
