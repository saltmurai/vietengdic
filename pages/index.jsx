import { useState } from "react";
import AddWordButton from "../components/AddWordButton";
import { Table, Button } from "@mantine/core";

const tableHeader = {
  head: ["Word", "Type", "Category"],
};

export default function IndexPage() {
  const [wordList, setWordList] = useState([]);
  const tableData = {
    head: tableHeader.head,
    body: wordList,
  };
  return (
    <main className="w-full min-h-screen bg-black">
      <div className="flex justify-end w-full p-4">
        <AddWordButton setWordList={setWordList} />
      </div>
      <div className="w-1/2 mx-auto">
        <Table
          data={tableData}
          withTableBorder
          withColumnBorders
          withRowBorders
        />
      </div>
      <div className="w-full mt-5 flex justify-center">
        <Button>Save</Button>
      </div>
    </main>
  );
}
