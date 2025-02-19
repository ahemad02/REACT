import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "../components/card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-3xl bg-green-500 p-3 rounded-md">
        vite with tailwind
      </h1>
      <Card
        username="ahemad"
        url="https://images.pexels.com/photos/2844468/pexels-photo-2844468.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
      />
      <Card username="salman" />
    </>
  );
}

export default App;
