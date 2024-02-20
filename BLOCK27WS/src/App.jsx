import Authenticate from "./components/Authenticate.jsx";
import SignUpForm from "./components/SignUpForm.jsx";
import './App.css'
import { useState } from "react";

export default function App() {
  const [token, setToken] = useState(null);

  return (
    <>
      <SignUpForm token={token} setToken={setToken} />
      <Authenticate token={token} setToken={setToken} />
    </>
  );
}