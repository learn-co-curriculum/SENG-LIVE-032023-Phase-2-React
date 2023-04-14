import React from "react";

function Header({ isDarkMode, toggleDarkMode }) {

  return (
    <header>
      <h1>
        <span className="logo">{"//"}</span>
        Project Showcase
      </h1>
      <button onClick = { toggleDarkMode }>{ isDarkMode ? "Light Mode" : "Dark Mode" }</button>
    </header>
  );
};

export default Header;
