import { useState } from "react";
import "./App.css";
import Authenticate from "./components/Authenticate";
import SignUpForm from "./components/SignUpForm";

const App = () => {
  const [token, setToken] = useState(null);

  return (
    <>
      <SignUpForm token={token} setToken={setToken} />
      <Authenticate token={token} setToken={setToken} />
    </>
  );
};

export default App;