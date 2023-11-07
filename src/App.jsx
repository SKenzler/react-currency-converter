import { useState } from "react";
import "./index.css";

function App() {
  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1580519542036-c47de6196ba5?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW9uZXl8ZW58MHx8MHx8fDA%3D)",
      }}
    >
      <h1 className="bg-red-200">Test for Tailwind</h1>
    </div>
  );
}

export default App;
