import React, { useContext } from "react";
import SearchContext from "../utils/SearchContext";

function SearchBar() {
  const [ search, setSearch ] = useContext(SearchContext);


  const handleChange = e => {
    e.preventDefault()
    setSearch(e.target.value.toLowerCase());
  };

  return (
    <div class="row search-bar">
      <form class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <i class="material-icons prefix">search</i>
            <input id="icon_prefix" type="text" class="validate" onChange={handleChange}/>
            <label for="icon_prefix">Search by name</label>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
