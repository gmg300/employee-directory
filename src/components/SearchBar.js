import React, {useState} from "react";

function SearchBar() {
  const [search, setSearch] = useState("Search Text");

  const handleChange = e => {
    e.preventDefault()
    setSearch(e.target.value);
  };

  return (
    <div class="row">
      <form class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <i class="material-icons prefix">search</i>
            <input id="icon_prefix" type="text" class="validate" onChange={handleChange}/>
            <label for="icon_prefix">{search}</label>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
