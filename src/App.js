import React, {useState, useEffect} from "react";
import "./App.css";
import API from './utils/API';
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer.js";
import UserList from "./pages/UserList";
import UserContext from "./utils/UserContext";
import SearchContext from "./utils/SearchContext";


function App() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');


  useEffect(() => {
    loadUsers();
  }, []);

  function loadUsers() {
    API.getUsers().then(res => { 
      setUsers(res.data.results)
    })
  }

  return (
    <UserContext.Provider value={[users, setUsers]}>
      <SearchContext.Provider value={[search, setSearch]}>
        <div className="app">
          <Navbar />
          <SearchBar />
          <UserList />
          <Footer />
        </div>
      </SearchContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
