import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer.js";
import UserList from "./pages/UserList";
import { UserProvider } from "./utils/UserContext";
import { SearchProvider } from "./utils/SearchContext";

function App() {
  return (
    <UserProvider>
      <SearchProvider>
        <div className="app">
          <Navbar />
          <SearchBar />
          <UserList />
          <Footer />
        </div>
      </SearchProvider>
    </UserProvider>
  );
}

export default App;
