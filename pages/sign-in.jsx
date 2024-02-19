import { Button } from "@mantine/core";
import { useState } from "react";
import { auth } from "../lib/firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/router";

import { GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  async function login() {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/");
    } catch (error) {
      alert(error.message);
      console.error(error);
    }
  }

  async function loginWithGoogle() {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result);
    } catch (error) {
      alert(error.message);
      console.log(error);
    }
  }
  return (
    <>
      <div className="flex flex-col gap-4 w-48 mx-auto">
        <input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="text"
          placeholder="Email"
        />
        <input
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
          placeholder="Password"
        />
        <Button onClick={login}>Login</Button>
        <Button onClick={loginWithGoogle} color="green">
          Sign in with Google
        </Button>
      </div>
    </>
  );
}
