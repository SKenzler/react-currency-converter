import { useState } from "react";
import InputBox from "./components/InputBox";
import "./index.css";

function App() {
  const [amount, setAmount] = useState(0);
  const [country, setCountry] = useState("au");
  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1580519542036-c47de6196ba5?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW9uZXl8ZW58MHx8MHx8fDA%3D)",
      }}
    >
      <InputBox label={"Twelve"} amount={199} />
    </div>
  );
}

export default App;
