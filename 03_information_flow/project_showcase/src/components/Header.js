import React, { useState } from "react";

function Header ({ isDarkMode, toggleDarkMode }) {

  
  const buttonText = isDarkMode ? "Light Mode" : "Dark Mode"

  return (
    <header>
      <h1>
        <span className="logo">{"//"}</span>
        Project Showcase
      </h1>
      <button onClick={ toggleDarkMode }>{buttonText}</button>
    </header>
  );
}

export default Header;
