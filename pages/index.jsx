import { useState, useEffect } from "react";
import AddWordButton from "../components/AddWordButton";
import { Table, Button, Avatar } from "@mantine/core";
import { auth } from "../lib/firebase";
import { signOut } from "firebase/auth";
import { useRouter } from "next/router";

import { database } from "../lib/firebase";
import { get, ref, child } from "firebase/database";

const dbRef = ref(database);

const tableHeader = {
  head: ["Word", "Type", "Category"],
};

export default function IndexPage() {
  const [user, setUser] = useState();

  const [wordList, setWordList] = useState([]);

  const router = useRouter();
  const tableData = {
    head: tableHeader.head,
    body: wordList,
  };

  useEffect(() => {
    // This function sets up the listener for changes in authentication state
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        console.log(currentUser);
      } else {
        // User is signed out
        setUser(null);
        router.push("/sign-in");
      }
    });
    return () => unsubscribe();
  }, []);

  async function logout() {
    try {
      await signOut(auth);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <main className="w-full min-h-screen bg-black">
      <div>{user ? <Avatar src={user.photoURL} alt="user-photo" /> : ""}</div>
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
      <button onClick={logout}>Logout</button>
    </main>
  );
}
