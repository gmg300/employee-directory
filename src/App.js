import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import CardContainer from "./components/CardContainer";
import { UserProvider } from "./utils/UserContext";

function App() {
  return (
    <UserProvider>
      <div className="app">
        <Navbar />
        <CardContainer />
      </div>
    </UserProvider>
  );
}

export default App;
