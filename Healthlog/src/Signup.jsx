import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export default function Signup({ setPage }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log("Signed up:", user);
        setPage("dashboard"); // redirect after signup
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <input
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        type="email"
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        type="password"
      />
      <button onClick={handleSignup}>Signup</button>

      <br />
      <button onClick={() => setPage("login")}>Already have an account?</button>
    </div>
  );
}
