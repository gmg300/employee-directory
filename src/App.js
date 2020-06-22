import React, {useState}  from "react";
import "./App.css";
import Navbar from "./components/Navbar";
// import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer.js";
import UserList from "./pages/UserList";
import { UserProvider } from "./utils/UserContext";

function App() {
  const [search, setSearch] = useState("");

  const handleChange = e => {
    e.preventDefault()
    setSearch(e.target.value);
  };
  return (
    <UserProvider>
      <div className="app">
        <Navbar />
        <div class="row">
          <form class="col s12">
            <div class="row">
              <div class="input-field col s12">
                <i class="material-icons prefix">search</i>
                <input
                  id="icon_prefix"
                  type="text"
                  class="validate"
                  onChange={handleChange}
                />
                <label for="icon_prefix">Search by name</label>
              </div>
            </div>
          </form>
        </div>
        <UserList search={search}/>
        <Footer />
      </div>
    </UserProvider>
  );
}

export default App;
