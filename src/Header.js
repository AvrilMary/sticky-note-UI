import React from "react";

//Remember that props here are:searchText

const Header = (props) => {
  //console.log(props);
  const searchValue = (event) => {
    props.onSearch(event.target.value);
  };

  return (
    <header>
      <h1 className="app-header__title">Super Sticky Notes</h1>
      <aside className="app-header__controls">
        <button onClick={props.addNote} className="add-new">
          + New Note
        </button>
        <input
          className="search"
          type="text"
          placeholder="Type here to search..."
          value={props.searchText}
          onChange={searchValue}
        />
      </aside>
    </header>
  );
};

export default Header;
