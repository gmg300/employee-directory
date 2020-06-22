import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import SearchBar from './components/SearchBar';
import UserList from './pages/UserList';
import Footer from  './components/Footer.js'
import { UserProvider } from "./utils/UserContext";


function App() {
  return (
    <UserProvider>
      <div className="app">
        <Navbar />
        <SearchBar />
        <UserList />
        <Footer />
      </div>
    </UserProvider>
  );
}

export default App;
