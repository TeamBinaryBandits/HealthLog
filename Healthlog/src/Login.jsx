import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export default function Login({ setPage }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log("Logged in:", user);
        setPage("dashboard"); // redirect after login
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
      <button onClick={handleLogin}>Login</button>

      <br />
      <button onClick={() => setPage("signup")}>Go to Signup</button>
    </div>
  );
}
