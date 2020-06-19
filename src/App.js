import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import SearchResultsList from "./components/SearchResultsList";
import { UserProvider } from "./utils/UserContext";

function App() {
  return (
    <UserProvider>
      <div className="app">
        <Navbar />
        <SearchResultsList />
      </div>
    </UserProvider>
  );
}

export default App;
