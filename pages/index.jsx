import { useState, useEffect } from "react";
import AddWordButton from "../components/AddWordButton";
import { Table, Button, Avatar } from "@mantine/core";
import { auth } from "../lib/firebase";
import { signOut } from "firebase/auth";
import { useRouter } from "next/router";

import { database } from "../lib/firebase";
import { get, ref, child, onValue } from "firebase/database";

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

        const dbref = ref(database, `users/${auth.currentUser.uid}`);

        onValue(dbref, (snapshot) => {
          const data = snapshot.val();
          console.log("new value");
          console.log(data);
          const array = Object.keys(data).map((key) => [
            key,
            data[key].type,
            data[key].category,
          ]);
          console.log(array);
          setWordList(array);
        });
      } else {
        // User is signed out
        setUser(null);
        router.push("/sign-in");
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {}, []);

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
