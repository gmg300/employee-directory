import React from "react";

function SearchBar() {
  return (
    <div class="row">
      <form class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <i class="material-icons prefix">search</i>
            <input id="icon_prefix" type="text" class="validate" />
            <label for="icon_prefix">Search by name</label>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
